//0(1) constant time
function getFirstElement(arr) {
    return [0]; //Always 0(1) because it takes one operation
}

//0(log n) - logarithmic Time

function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target) return mid;
        else if (arr[mid] > target) low = mid + 1;
        else high = mid + 1;
    }
    return -1;
}


// 0(n)- Linear
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); //0(n) because you go through all 'n' elements
    }
} 

//0(n log n) 
function mergeSort(arr) {
    if(arr.length - 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return mergeSort(left, right);
}