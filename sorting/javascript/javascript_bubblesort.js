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
    return data;
    
}

const filepath = '../data.txt'

fetchDataFromFile(filepath)
    .then(data => {
        const sortedData = bubblesort(data)
        console.log(sortedData);
    });

