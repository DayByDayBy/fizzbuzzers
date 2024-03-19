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

function quicksort(data) {
  if (data.length <= 1) {
    return data;
  } else {
    const pivot = data[0];
    const left = [];
    const right = [];
    for (let i = 1; i < data.length; i++) {
      if (data[i] < pivot) {
        left.push(data[i]);
      } else {
        right.push(data[i]);
      }
    }
    return [...quicksort(left),  pivot, ...quicksort(right)];
  }
}



// function sortDataFromFile() {
//   const filePath = "../data.txt";
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("that's no sorted m8, sorry:", err);
//       return;
//     }
//     const dataArray = data.split(",").map(element => parseInt(element.trim(), 10));
//     const sortedData = quicksort(dataArray);
    

//     console.log("sorted, m8: ", sortedData);
//   });
// }

