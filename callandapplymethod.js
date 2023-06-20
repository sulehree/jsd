// const person = {
//   firstName:"Abbas",
//   lastName:"Sadiq",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // This will return "John Doe":
// console.log(person.fullName.call(person1));
let AirSial = {
    airline: "Air Sial",
    OperationNature: "Private",
    bookings: []
}

let mainPlane = {
    airline: "PIA",
    OperationNature: "Govt",
    bookings: [],
    ticketBooking: function (passengerName, ticketClass = "Economy") {
        console.log(`${passengerName} is flyign in ${this.airline} in ${ticketClass} Class, and ${this.airline} is a ${this.OperationNature} Airline`)
        this.bookings.push(
            {
                PassengerName: passengerName,
                AirLine: this.airline,
                TicketClass: ticketClass

            }

        )

    }

}



let afunc = mainPlane.ticketBooking;
afunc.call(mainPlane, "Abbas");
afunc.call(AirSial, "Rashid");
afunc.apply(AirSial, ["Ahmad", "Business"]) // in apply we pass parameter in array method
console.log(mainPlane);
console.log(AirSial)
