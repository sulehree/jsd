// Bind Method



function Greetings() {
    console.log(`Welcome Welcome Mr.${this.userName}, to the ${this.Department} Department`)
}

candidate = {

    userName: "Khalid",
    designation: "Helper",
    Department: "Health"

}

let NewFunction = Greetings.bind(candidate); // here we are binding a functions that has the same properties
NewFunction();

