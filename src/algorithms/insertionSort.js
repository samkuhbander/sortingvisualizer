//Insetion Sort on array 

export function insertionSort(arr) {
    let animations = [];
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            animations.push([j, j - 1]);
            animations.push([j, j - 1]);
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return animations;
}