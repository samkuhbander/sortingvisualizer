//Quick sort on array

export function quickSort(arr, start = 0, end = arr.length) {
    if (start >= end) return;
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}