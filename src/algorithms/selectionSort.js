// Selection sort on array

export function selectionSort(arr) {
    let animations = [];
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            animations.push([i, j]);
            animations.push([i, j]);
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            animations.push([i, min]);
            animations.push([i, min]);
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return animations;
}