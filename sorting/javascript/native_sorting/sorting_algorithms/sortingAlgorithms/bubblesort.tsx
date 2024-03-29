export function bubblesort(numbers: number[]): number[] {
    
    let n = numbers.length;

    for (let i=0; i<n; i++){
        for (let j=0; j<n-i-1;j++){
            if (numbers[j] > numbers[j+1]){
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    return numbers;
    
}