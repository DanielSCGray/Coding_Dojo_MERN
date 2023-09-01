

/* 
    Params: numbers, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.

    Steps:

    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx but can be any.

    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).

    3. return: the index where the left section of smaller items ends.

    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

// const numbers1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for numbers1 depending on which number is chosen
as the pivot.

E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
// const numbers2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
// const numbers3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// const numbers4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 */
function partition(numbers = [], left = 0, right = numbers.length - 1) {
    let pivotIndex = left + Math.floor((right-left) / 2);
    let pivot = numbers[pivotIndex];
    numbers[pivotIndex] = numbers[right];
    numbers[right] = pivot;
    let upperBound = right;
    while (left <= right) {
        for (let i = left; i <= right; i++) {
            if (numbers[i] > pivot) {
                left = i;
                break;
            }
            left = i;
        }
        for (let j = right; j >= left-1; j--) {
            if (numbers[j] < pivot) {
                right = j;
                break;
            }
            right = j;
        }
        if (numbers[left] > pivot && numbers[right] < pivot && left <= right) {
            
            let temp = numbers[right];
            numbers[right] = numbers[left];
            numbers[left] = temp;
            
        }
    }
    let temp = numbers[upperBound];
    numbers[upperBound] = numbers[left];
    numbers[left] = temp;
    return left;
}
// console.log(partition(numbers1))
// console.log(numbers1)

// console.log(partition(numbers3))
// console.log(numbers3)

// console.log(partition(numbers3, 0, 2))
// console.log(numbers3)

// console.log(partition(numbers3, 0, 1))
// console.log(numbers3)



    // Hints: Establish a pivot point (mid point)

    // We'll want to while loop as long as we're inside the starting array. (We can use those left/right indexes)
    // Since we are doing this in place, we'll move these index positions in order to perform the swaps.




/*****************************************************************************/


/* 
Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

    Create a function that uses yesterday’s partition to fully sort an array
    in-place.

    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.

    Steps:
        - start by partitioning the full array
            (use the previously built partition algo).
        - then partition the left side of the array
            (left of the returned partition idx) and the right side
            (right of the returned partition idx), recursively.
*/

// Quicksort test cases (after completing partition)
const numbers1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const numbers2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const numbers3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const numbers4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(numbers = [], left = 0, right = numbers.length - 1) {
    if (left>=right) {
        return
    }
    let pivotIDX = partition(numbers, left, right)
    quickSort(numbers, left, pivotIDX-1);
    quickSort(numbers, pivotIDX+1, right)
    return numbers

}

/*****************************************************************************/

console.log(quickSort(numbers1))
console.log(quickSort(numbers2))
console.log(quickSort(numbers3))
console.log(quickSort(numbers4))