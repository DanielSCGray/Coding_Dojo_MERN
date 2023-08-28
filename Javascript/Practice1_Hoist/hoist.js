//Given
console.log(hello);                                   
var hello = 'world';      
//Interpreted:
/* 
var hello; 
console.log(hello); console logs undefined
var hello = 'world';  
*/

//Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//Interpreted:
/*
function test(){ //Function definition is hoisted
    var needle = 'magnet';
    console.log(needle);
}
var needle = 'haystack';
test(); function called => var is redefined as 'magnet', console logs magnet
*/

//Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


//Interpreted:
/*
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // prints super cool since the function has not been called


*/
//Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


//Interpreted:
/*
var food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
console.log(food); //logs 'chicken (as function hasn't been called)
eat(); // food re defined as 'half-chicken', logs 'half-chicken', food redefined as 'gone'


*/

//Given
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


//Interpreted:
/*
var mean is hoisted to the top but undefined
mean(); //type error from attempting a function call on undefined
*/

//Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


//Interpreted:
/*
var genre;
function rewind() { //func is hoisted
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // logs undefined
rewind(); // genre set to 'rock', logs 'rock', genre set to 'r&b', logs 'r&b'
console.log(genre); // logs 'disco' -- the value change was limited to within the scope of the function 

*/

//Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Interpreted:
/*
function learn() { //func def hoisted
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo); // logs 'san jose'
learn(); // log 'seattle', logs 'burbank'
console.log(dojo); // logs 'san jose' --  changes of var value occured in function scope

console.log(dojo);

*/

//Given
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

//Interpreted:
/*
function makeDojo(name, students){ // func def hoisted
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
console.log(makeDojo("Chicago", 65)); // prints object with the key/val pairings assigned
console.log(makeDojo("Berkeley", 0)); type error a const object must remain an object type and the function tries to re-set it to a string.


*/