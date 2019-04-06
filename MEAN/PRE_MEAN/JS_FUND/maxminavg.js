function maxminAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var Avg = 0
    for(var i =0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        Avg += arr[i];
    }
    Avg = Avg/arr.length;
    return (console.log("The minimum is" ,min,", The maximum is" ,max,", and the average is" ,Avg,));  
}
maxminAvg([-2,5,8,0,-1]);