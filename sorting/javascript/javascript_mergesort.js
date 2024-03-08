const fs = require("fs");

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

function mergeSort(data) {
  if (data.length <= 1) {
    return data;
  }

  const middle = Math.floor(data.length / 2);
  const left = data.slice(0, middle);
  const right = data.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function sortDataFromFile() {
  const filePath = "../data.txt";
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    const dataArray = data.split(",").map(element => parseInt(element.trim(), 10));
    const sortedData = mergeSort(dataArray);
    
    console.log("Sorted data: ", sortedData);
  });
}

sortDataFromFile();
