function fetchDataFromFile(filePath) {
  return fetch(filePath)
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          return response.text();
      })
      .then(data => {
          return data.split(',').map(Number);
      })
      .catch(error => {
          console.error('Error while fetching data:', error);
          return []; 
      });
}


function merge(left, right) {

  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


function mergesort(data) {
  if (data.length <= 1) {
    return data;
  }

  const middle = Math.floor(data.length / 2);
  const left = data.slice(0, middle);
  const right = data.slice(middle);

  return merge(mergesort(left), mergesort(right));
}


const filePath = '../data.txt'


fetchDataFromFile(filePath)
    .then(data => {
        const sortedData = mergesort(data)
        console.log(sortedData);
    });



