//Quick sort on array

export function quickSort(arr) {
    let animations = [];
    quickSortHelper(arr, 0, arr.length - 1, animations);
    return animations;
}

function quickSortHelper(arr, left, right, animations) {
    if (left >= right) return;
    let pivot = partition(arr, left, right, animations);
    quickSortHelper(arr, left, pivot - 1, animations);
    quickSortHelper(arr, pivot + 1, right, animations);
}

function partition (arr, left, right, animations) {
    let pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        animations.push([j, right]);
        animations.push([j, right]);
        if (arr[j] < pivot) {
            if (i !== j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            i++;
        }
    }
    let temp = arr[i];
    arr[i] = arr[right];
    arr[right] = temp;
    return i;
}