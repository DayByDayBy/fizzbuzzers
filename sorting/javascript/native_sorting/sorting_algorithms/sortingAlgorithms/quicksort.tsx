export function quicksort(numbers: number[]): number[] {
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
            return [...quicksort(left), pivot, ...quicksort(right)];
        }
    }