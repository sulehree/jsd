// foreach method for an array
let WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


// for (let i = 0; i < WeekDays.length; i++) {
//   console.log(WeekDays[i]);
// }

// console.log("_________for each __________");
// // with array.foreach
// WeekDays.forEach(function(element) {
//   console.log(element)
// });

// console.log("________array.map ___________");
// // with array.foreach

// // with array.map
// WeekDays.map(function(element) {
//   console.log(element)
// });

let blockedPerson = [
    { userName: "Abbas", reason: "coming from far" },
    { userName: "Sadiq", reason: "not strong enough" }
];

blockedPerson.forEach(element => {
    console.log(`${element.userName} is blocked due to ${element.reason}`)
});
console.log(blockedPerson)
//document.getElementById("one").innerText= blockedPerson[1].reason;