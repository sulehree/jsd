// in JavaScript every thing is Object other then primitive dat
// OOP in Java Script
// Constructor Function and this operator
// we cannot use arrow function as constructor
// Defining function in constructor functions in not a good practise, for defining function in  constructor function we use prototypes
//prototype

Car = function (carName, carModel) {


    this.carName = carName;
    this.carModel = carModel;
    // this is not a good practise to make function in constructor functions , wo use prototypes
    // this.CarStart = function () {
    //      console.log(this.carName, " has started")
    // }


}
Car.prototype.StartEngine = function () {

}
Car.prototype.carCountry = "Japan";
// Car.prototype;
carWithOutConstructor = { carName: "ToyotaVitz", carModel: 2022 }

carInstance = new Car("ToyotaVitz", 2022); // this object has custom defined constructor
// console.log(carWithConstrutor);
// console.log(Object.keys(carWithConstrutor));
// console.log(Object.values(carWithConstrutor));
// console.log(carWithConstrutor);
// carWithConstrutor.CarStart();
// console.log(Object.entries(carWithConstrutor))// it will show the enumerable enteries and their values

console.log(carInstance);
// console.log(Car.prototype)__ Car.prototype is equal to carinstance.__proto__
console.log(carInstance.__proto__) // if we have instance and dont aware about the constructor  , we can find the protoype function like this

let arr = [1, 2];
console.log(arr.__proto__)// An Arrayy has also prototype functions



