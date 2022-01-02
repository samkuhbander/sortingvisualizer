// Heap sort on array
export function heapSort(arr) {
    let animations = [];
    buildMaxHeap(arr, animations);
    for (let i = arr.length - 1; i > 0; i--) {
        animations.push([i, 0]);
        animations.push([i, 0]);
        let temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        heapify(arr, 0, i - 1, animations);
    }
    return animations;
}

function buildMaxHeap(arr, animations) {
    let heapSize = arr.length;
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
        heapify(arr, i, heapSize - 1, animations);
    }
}

function heapify(arr, i, heapSize, animations) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
    if (left < heapSize && arr[left] > arr[i]) {
        max = left;
    }
    if (right < heapSize && arr[right] > arr[max]) {
        max = right;
    }
    if (max !== i) {
        animations.push([i, max]);
        animations.push([i, max]);
        let temp = arr[i];
        arr[i] = arr[max];
        arr[max] = temp;
        heapify(arr, max, heapSize, animations);
    }
}