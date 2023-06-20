// For In loop for objects

let car = {
    color: "red",
    year: "2022",
    Type: "hatchback",
    Company: "Honda"

}

for (const key in car) {
    console.log(car[key]);
}
let namearray = [];
let myname = ""
let MyName = "muhammad abbas Sadiq";
for (c in MyName) {
    console.log(MyName[c].toUpperCase());
    namearray.push(MyName[c]);

}
// console.log(namearray);//
console.log(namearray.join(""))
