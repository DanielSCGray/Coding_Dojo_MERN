

function mergeSort(numbers) {
    // Base case: If the numbers has only one element, return it.
    if (numbers.length <= 1) {
        return numbers;
    }

    // Recursive case: Split the numbers into two halves, sort each half recursively, and then merge the two sorted halves.
    const middle = Math.floor(numbers.length / 2);
    const left = mergeSort(numbers.slice(0, middle));
    const right = mergeSort(numbers.slice(middle));
    return merge(left, right);
}
function merge(left, right) {
    // Create a new numbers to store the merged elements.
    const merged = [];

    // Iterate over the left and right numbers, adding the smaller element to the merged numbers each time.
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left or right numbers to the merged numbers.
    merged.push(...left.slice(i));
    merged.push(...right.slice(j));

    return merged;
}

console.log(mergeSort(numbersRandomOrder));
console.log(mergeSort(numbersOrdered));
console.log(mergeSort(numbersReversed));
console.log(expectedSort)