// print('\n')    #  not necessary at all, but improves command-line readability when running 

const fs = require('fs');
const data = fs.readFileSync('../data.txt', 'utf8').split(',').map(Number);


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

// # print(quickSorted[0], "items, sorted in ", quickSorted[1], "seconds:  ", '\n\n', quickSorted[2][:5], "(list truncated for legibility)")
