function fizzbuzz(n){
    if(typeof n == "string"){
        return (console.log("Parmeter must be a positive number"));
    }
    var result = "";

    for(var i =1; i<= n; i++){
        if( i%3==0 && i%5==0){
            result += "FizzBuzz, ";
        }
        else{
            if( i%3==0){
                result += "Fizz, ";
                continue;
            }
            if( i%5==0){
                result += "Buzz, ";
                continue;
            }
            result += i + ", ";  
        }             
    }
    return console.log(result);
}
fizzbuzz(15);