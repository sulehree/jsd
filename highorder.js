// const radius = [1, 2, 3];
// // function to calculate area of the circle
// const calculateArea =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// // function to calculate diameter of the circle
// const calculateDiameter =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// console.log(calculateDiameter(radius))

// const circumeference = function (radius) {
//     return 2 * Math.PI * radius;
// }

// const radius = [1, 2, 3];
// // logic to clculate area
// const area = function (radius) {
//     return Math.PI * radius * radius; // circle area calculation
// }
// // logic to calculate diameter
// const diameter = function (radius) {
//     return 2 * radius; // diamter calculation logic
// }
// // a reusable function to calculate area, diameter, etc
// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log("CircumFerence of Circle", calculate(radius, circumeference));
// console.log("Area of Circle", calculate(radius, area));
// // console.log("Diameter of Circle", calculate(radius, diameter));
// const users = [
//     {firstName: 'John', lastName: 'Doe', age: 25},
//     {firstName: 'Jane', lastName: 'Doe', age: 30},
//     {firstName: 'Jack', lastName: 'Doe', age: 35},
//     {firstName: 'Jill', lastName: 'Doe', age: 40},
//     {firstName: 'Joe',  lastName: 'Doe', age: 45},
// ]

// const result = users.map((user) => user.firstName + ' ' + user.lastName)
// console.log(result); // ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', 'Joe Doe']

// let compliment=function (msg){

//     return function(name){
//         console.log(`${name},${msg}`)
//         // return msg
//     }
   
// }

// console.log(compliment("how r u")("abbas"))


// immidetialy invoked function expression
//Executed only once
// by using () we have make it expression and we can call it only once. as it haas no name.
// (function(name){
//     console.log(name,"hello how are you")
// })("abbas")
// 


//SetTimeOut.. Run a function once after a given time interval
// SetInterval  Run a function repeatedly after a given time interval

// Greeting=function(name){console.log(`${name} : How are you`)}

// Greeting("abbas");
// Syntax  setTimeOut(func|code,timeinterval,arg1,arg2.....)
// SetTimeout(Greeting("Shiekh"), 5000);
// setTimeout((name,fname="Sadiq") => {
//     console.log(`${name} ${fname},How are you`);
// }, 3000,"Abbas");

// setInterval((name) => {
//     console.log(`${name}, how are you Dear`);
// }, 3000,"Abbas");
 text();
 // any function defined with function key word wil hoisted on top, it mean u can call the funcion before declaring it.. but for arrow function u have to declare the funciton first then u can call the arrow function
 function text(){
    console.log("This is Test Function");
}
