export const sortingAlgorithms = {


quicksort: function(numbers: number[]): number[] {
    if (numbers.length <= 1) {
        return numbers;
    } else {
        const pivot = numbers[0];
        const left = [];
        const right = [];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < pivot) {
                left.push(numbers[i]);
            } else {
                right.push(numbers[i]);
            }
        }
        return [...sortingAlgorithms.quicksort(left), pivot, ...sortingAlgorithms.quicksort(right)];
    }
},

bubblesort: function(numbers: number[]): number[] {
    
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
        
},

insertionsort: function(numbers: number[]): number[] {
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
},

mergesort: function(numbers: number[]): number[] {
    function merge(left: number[], right: number[]): number[] {
        let result: number[] = [];
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

    if (numbers.length <= 1) {
        return numbers;
    }

    const middle = Math.floor(numbers.length / 2);
    const left = numbers.slice(0, middle);
    const right = numbers.slice(middle);

    return merge(sortingAlgorithms.mergesort(left), sortingAlgorithms.mergesort(right));
}

}

export default sortingAlgorithms;

