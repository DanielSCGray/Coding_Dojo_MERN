const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) 
// Tesla
console.log(otherRandomCar) 
// Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); 
// Error: name is undefined -- the destructuring set the value at employee.name to otherName
console.log(otherName); 
// Elon

//* technically output is ReferenceError: name is not defined
//the second console log doesn't run due to the error above it

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
// 12345 
console.log(hashedPassword);
//undefined -- the person object has no 'password' property so destructuring sets hashedPassword to undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first == second);
//false: 2 != 5
console.log(first == third);
//true: 2 == 2

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //sets const key to the value at lastTest.key ('value')
const { secondKey } = lastTest; // sets const secondKey to value at lastTest.secondKey ([1,5,1,8,3,3])
const [ ,willThisWork] = secondKey; // It will! const secondKey is an array and this is valid array destructuring syntax 
//Predict the output
console.log(key);
//value
console.log(secondKey);
//[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
//1
console.log(willThisWork);
//5




