function binarySearch(arr, val){
    console.log(arr[Math.floor(arr.length/2)]);

    if(arr[Math.floor(arr.length / 2)] == val){
        return true;
    }

    if(arr.length == 1){
        return false;
    }

    if(arr[Math.floor(arr.length / 2)] > val){
        arr = arr.slice(0, Math.floor(arr.length / 2));
        return binarySearch(arr, val);
    }
    if(arr[Math.floor(arr.length / 2)] < val){
        arr = arr.slice(Math.floor(arr.length / 2), arr.length);
        return binarySearch(arr, val);
    }
}
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 78));