//ES6 introduce classes to deal thinks like Constructor Functions and prototype inheritence

// Classes

// setter and getter methods for classes.. Object accessors( cmoputed properties)

class Vehicle {
    constructor(VehicleType, vehicleModel, vehicleColor) {
        this.VehicleType = VehicleType;
        this.vehicleModel = vehicleModel;
        this.vehicleColor = vehicleColor;

    }
    StartEngine() {

        console.log("vehicle engine started  of ", this.VehicleType)
    }
    get _StartEnging() { // in getter we mostly return some values
        return ("Get Object accessor for Class vehicle");
    }
    set ChangeColor(color) {
        this.vehicleColor = color;
    }

    get vehicleDescription() {
        return `This is ${this.VehicleType} vehicle, and its Model is ${this.vehicleModel}, and It's Color is ${this.vehicleColor}`
    }
}

// Static Method : this are class level method , which got defined with class , it does not exist on instance level
Vehicle.BreakMethod = function () {

    console.log(" this is vehicle Static Method , that is only accessible with Class name");
}
Vehicle.prototype.vehicleCountry = "Japan"; // we can also set the properties of prototype
Vehicle.prototype.StopEngine = function () { // here in classes we can also add prototpe function
    console.log("vehicle Engine stopped of ", this.VehicleType)
}
// 
class Bike extends Vehicle {
    constructor(VehicleType, vehicleModel, vehicleColor, horsepwer) {
        super(VehicleType, vehicleModel, vehicleColor) // if we extend the class..then first we have to call super method with value of parent class properties
        this.horsepwer = horsepwer;
    }
     BikeMethod(){
        console.log("This is Bike Method");
     }
}
let newVehicle = new Vehicle("Toyota Vitz Car", 2022, "Green");
let newBike = new Bike("Honda Bike", 2023, "Black", 125);
console.log(newVehicle);
newVehicle.VehicleCountry = "Pakistan";

// newvehicle.StartEngine()

console.log(newVehicle._StartEnging);
newVehicle.ChangeColor = "White";

console.log(newVehicle);
console.log(newVehicle.vehicleDescription);
// newVehicle.BreakMethod(); it is error, bcoz it is class level method
Vehicle.BreakMethod(); // this will show.. output

console.log(newBike)
newBike.ChangeColor="RedBlack"

console.log(newBike)
// console.log(newBike.__proto__);// to check details of the new inherited object
console.log(newBike.__proto__);// to check details of the new inherited object
