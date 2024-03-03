
function quicksort(data){
    if (data.length <= 1){
        return data;
    } else {
        const pivot = data[0];
        const left = [];
        const right = [];
        for (let i = 1; i < data.length; i++) {
                if (data[i] < pivot) {
                    left.push(data[i]);
                } else {
                    right.push(data[i]);
                }
            }
    return [...quicksort(left),...quicksort(right)];
    }
}