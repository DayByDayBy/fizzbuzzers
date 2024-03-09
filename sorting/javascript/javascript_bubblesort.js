// print('\n')    #  not necessary at all, but improves command-line readability when running 

const fs = require('fs');
let data;
try {
    data = fs.readFileSync('../data.txt', 'utf8').split(',').map(Number);
} catch (error) {
    console.error('error while reading file:', error);
}

function bubblesort(data){
    
    let n = data.length;

    for (let i=0; i<n; i++){
        for (let j=0; j<n-i-1;j++){
            if (data[j] > data[j+1]){
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }
return data
    
}

bubblesort(data)
console.log(bubblesort(data));

