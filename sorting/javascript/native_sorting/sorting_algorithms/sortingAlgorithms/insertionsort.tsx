export function insertionsort(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length; i++){
        let j = i-1
        while (numbers[j] > numbers[j+1] && j >= 0){
            let temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
            
            j -=1
        }
    }
    return numbers;
}







