class Bike {
    miles: number = 0;
    constructor(
        public price : number,
        public max_speed: string,
    ){}
    displayInfo = () => {
        console.log(`Price ${this.price}, max_speed ${this.max_speed}, total miles ${this.miles}`);
        return `Price ${this.price}, max_speed ${this.max_speed}, total miles ${this.miles}`};
    ride = () => {
        console.log("Riding");
        this.miles += 10;
        return this;
    };
    reverse = () => {
        console.log("Reversing");
        if(this.miles - 5 < 0){
            console.log("You can only go forward");
            this.displayInfo();
        }
        else{
            this.miles -= 5;
        }
        return this;
    }
}

let bike1 = new Bike(200, "25mph");
let bike2 = new Bike(100, "12mph");
let bike3 = new Bike(400, "70mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();
