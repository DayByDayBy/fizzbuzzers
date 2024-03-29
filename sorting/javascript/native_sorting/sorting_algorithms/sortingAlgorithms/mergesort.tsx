export function mergesort(numbers: number[]): number[] {
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

    return merge(mergesort(left), mergesort(right));
}