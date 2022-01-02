//Merge sort on array

export function mergeSort(arr) {
    let animations = [];
    mergeSortHelper(arr, 0, arr.length - 1, animations);
    return animations;
}

function mergeSortHelper(arr, left, right, animations) {
    if (left >= right) return;
    let mid = Math.floor((left + right) / 2);
    mergeSortHelper(arr, left, mid, animations);
    mergeSortHelper(arr, mid + 1, right, animations);
    merge(arr, left, mid, right, animations);
}

function merge(arr, left, mid, right, animations) {
    let leftArr = arr.slice(left, mid + 1);
    let rightArr = arr.slice(mid + 1, right + 1);
    let i = 0;
    let j = 0;
    let k = left;
    while (i < leftArr.length && j < rightArr.length) {
        animations.push([k, k]);
        animations.push([k, k]);
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    while (i < leftArr.length) {
        animations.push([k, k]);
        animations.push([k, k]);
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < rightArr.length) {
        animations.push([k, k]);
        animations.push([k, k]);
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}