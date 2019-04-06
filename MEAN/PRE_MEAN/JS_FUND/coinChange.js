function coinChange(num){
    change = {
        "dollars" : 0,
        "quarters" : 0,
        "dimes" : 0,
        "pennies": 0
        }

    while(num > 100){        
        change["dollars"] = Math.floor(num/100);
        num = num%100;
    }
    while(num > 25 && num < 99){
        change["quarters"] = Math.floor(num/25);
        num = num%25;
    }
    while(num > 10 && num < 24){
        change["dimes"] = Math.floor(num/10);
        num = num%10;
    }
    change["pennies"] = num;

    console.log(change);
    return change;
}
coinChange(115);