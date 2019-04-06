function braceValid(str){
    var braces = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }

    var result = [];
    for(var i =0; i < str.length; i++){
        if( str[i] == "(" || str[i] == "[" || str[i] == "{" ){
            result.push(str[i]);
        } 
        else if( braces[str[i]] != undefined){
            if(result[result.length-1] == braces[str[i]]){
                result.pop();
            }
            else{
                console.log("false");
                return false;
            }
        }
    }
    console.log("true");
    return result.length === 0;
}
braceValid("{(})");