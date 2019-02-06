function a(x){
    var arr=[]
    for (var i=1; i<=x; i++){
        arr.push(i);
    }
    return arr;
}
console.log(a(255));

function a(x){
    var sum = 0;
    for (var i=1; i<=x; i++){
        if(i%2===0){
            sum += i;
        }
    }
    return sum;
}
console.log(a(1000));

function a(x){
    var sum = 0;
    for (var i=1; i<=x; i++){
        if(i%2===1){
            sum += i;
        }
    }
    return sum;
}
console.log(a(5000));

function a(x){
    var sum = 0;
    for (var i=0; i<x.length; i++){
        sum+= x[i];
    }
    return sum;
}
console.log(a([1,2,3,4]));

function a(x){
    var max = x[0];
    for (var i=1; i<x.length; i++){
        if (x[i] > max){
            max = x[i];
        }
    }
    return max;
}
console.log(a([1,2,3,4]));

function a(x){
    var sum = 0;
    for (var i=0; i<x.length; i++){
        sum+= x[i];
    }
    return sum/x.length;
}
console.log(a([1,2,3,4]));

function a(x){
    var odd=[]
    for(var i = 0; i < x.length; i++){
        if (i%2===1){
        odd.push(i);
        }
    }
return odd;  
}
console.log(a(50));

function a(x,y){
    var count=0;
    for(var i=0; i<x.length; i++){
        if (x[i]>y){
            count+=1;
        }
    }
    return count;
}
console.log (a([1,3,5,7],3))

function a(arr){
    for(var i=0; i<arr.length; i++){
        arr[i]=arr[i] * arr[i];
    }
    return arr;
}
console.log (a([1,5,10,-2]))

function a(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}
console.log (a([1,5,10,-2]))

function a(x){
    var arr=[]
    var max=0;
    var min=0;
    var sum=0;
    for(var i=0; i<x.length; i++){
        if(x[i]>max){
            max=x[i]
        }
        if(x[i]<max){
            min=x[i]
        }
        sum+=x[i];
    }
    sum=sum/x.length;
    arr.push(max, min, sum);
    return arr;
}
console.log(a([1,5,10,-2]))

function a(arr){
    var temp=arr[0];
    arr[0]= arr[arr.length-1];
    arr[arr.length-1] = temp; 
    return arr;
}      
console.log (a([1,5,10,-2]))

function a(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}
console.log (a([1,5,10,-2]))