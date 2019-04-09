function filter(arr, callback){
    newarr = [];
    for(var i=0; i <  arr.length; i++){
        let yes = callback(arr[i]);
        if(yes == true){
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
}

filter([1,2,3,4,5,6], function(num){
    return num % 2 == 0;
});