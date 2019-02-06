Biggie Size
function a(arr){
    for( var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return arr;
}
y=a([-1,3,5,-5]);
console.log (y);

Print Low, Return High
function a(arr){
    var low=arr[0];
    var high=arr[0];
    for( var i=1; i<arr.length; i++){
      if(arr[i]<low){
          low=arr[i];
      }
      if(arr[i]>high){
          high=arr[i];
      }
    }
    console.log (low);
    return high;
}
console.log (a([-1,3,5,-5]));

Print One, Return Another
function a(arr){
    var print=arr[arr.length-2];
    console.log (print);
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2===1){
            return arr[i];
        }
    }
}
console.log (a([-1,3,5,-5]));

Double Vision
function a(x){
    for(var i=0; i<x.length; i++){
        x[i]*=x[i];
    }
    return x;
}
console.log (a([1,2,3]))

Count Positives
function a(arr){
    var count=0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            count+=1;
        }
    }
    arr.pop();
    arr.push(count);
    return arr;
}
console.log (a([-1,1,1,1]))

***Evens and Odds***
function a(arr){
    for(var i=0; i<arr.length; i++){
      if(arr[i]%2==1 && arr[i+1]%2==1 &&arr[i+2]%2==1){
        console.log("That's odd!");
      }
      if(arr[i]%2===0 && arr[i+1]%2===0 &&arr[i+2]%2==0){
        console.log("Even more so!");
      }
    }
}
a([1,2,8,4,1])

Increment the Seconds
function a(arr){
    var add= [];
    for(var i=0; i<arr.length; i++){
          if(i%2!==0){
           arr[i]+=1;
           add.push(arr[i]);
        }   
    }
    return add;
}
console.log(a([2,4,6,8,10,12]))

***Previous Lengths***
for(var i=arr.length-2; i>-1; i--){
    arr[i+1]=arr[1].length;
    }
return arr;
}

Add Seven to Most
function a(arr){
    var New= [];
    for(var i=0; i<arr.length; i++){
        New.push(arr[i]+7); 
    }
    return New;
}
console.log(a([1,2,3]))

Reverse Array
function a(arr){
    var temp = 0;
    for(var i=0;i<arr.length/2; i++){
        temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
        }
        return arr;
    }
console.log(a([2,4,6,1,3]));

Outlook: Negative
function a(arr){
    for(var i=0; i<arr.length; i++){
       if(arr[i]>0){
           arr[i]=0-arr[i]
       }
    }
    return arr;
}
console.log(a([1,-3,5,-2,4]));

Always Hungry
function a(arr){
    var count=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]="food"){
            console.log("yummy");
            count++;
        }
    }
    if (count===0){
        console.log("I'm hungry")
        
    }
}
console.log(a(["box","box","fod","fod"]))

Swap Toward the Center
function a(arr){
    var x=0;
    for(var i=0; i<arr.length/2; i+=2){
        x=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=x;
    }
}
console.log(a(arr));

Scale the Array
function ScaleArray(x,y){
    for(var i=0; i<arr.length; i++){
        arr[i]=arr[i]*y;
    }
}
ScaleArray([1,2,3], 3)
