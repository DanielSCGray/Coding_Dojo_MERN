function partition(array, left, right) {
    let pivotIdx = left + Math.floor(Math.random() * (right - left + 1));
    let pivotVal = array[pivotIdx];

    while (left <= right) {
        while (array[left] < pivotVal) {
            left++;
        }
        while (array[right] > pivotVal) {
            right--;
        }
        if (left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }

    return left;
}

function quicksort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIdx = partition(array, left, right);
        quicksort(array, left, pivotIdx - 1);
        quicksort(array, pivotIdx, right);
    }
    return array;
}

let testArr = [4, 6, 9, 1, 2, 8, 3, 7];
quicksort(testArr);
console.log(testArr);
