// Bubble sort on array 

export function bubbleSort(arr) {
    let animations = [];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                animations.push([i, i + 1]);
                animations.push([i, i + 1]);
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return animations;
}