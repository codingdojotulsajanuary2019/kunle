// console.log(hello);                                   
// var hello = 'world'; 
// var hello;
// console.log(hello); //logs undefined
// hello = world;

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// var needle;
// needle = "haystack";
// function test(){
//     var needle;
//     needle = "magnet";
//     console.log(needle); //logs magnet
// }

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// var brendan;
// brendan = "super cool";
// console.log(brendan); logs "super cool";

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
// var food;
// food = chicken;
// console.log(food) logs chicken
// food = half-chicken;
// function eat(){
//     console.log(food) logs half-chicken
//     var food;
//     food = gone
// }

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// console.log(food); logs undefined
// mean is not a function

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// var genre;
// console.log(genre); logs undefined
// genre = disco
// function rewind(){
//     var genre;
    // genre = rock
//     console.log(genre); logs rock
//     genre = r&b
//     console.log(genre); logs r&b
// }
// console.log(genre) logs disco

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// dojo;
// dojo = san jose;
// console.log(dojo); logs san jose
// function learn(){
//     var dojo;
//     dojo = seattle;
//     console.log(dojo); logs seattle
//     dojo = burbank;
//     console.log(dojo); logs burbank
// }
// console.log(dojo); logs san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


// function makeDojo(name, students){
//     const dojo;
//     dojo = {};
//     dojo.name = chicago
//     dojo.student = 65
//     true;
// }

// function makeDojo(name, students){
//     const dojo;
//     dojo = {};
//     dojo.name = berkeley
//     dojo.student = 0
// dojo = "closed for now"; error
// }
