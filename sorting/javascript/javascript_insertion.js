const fs = require('fs');
const data = fs.readFileSync('../data.txt', 'utf8').split(',').map(Number);


function insertion_sort(data){
    for (let i = 0; i < data.length; i++){
        let j = i-1
        while (data[j] > data[j+1] && j >= 0){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
            j -=1
        }
    }
    
}
insertion_sort(data);
console.log(data);