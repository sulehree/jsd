// console.log("Objects in JavaScript")

// car ={
//     color:"Green",
//     Model:"2022",
//     type:"HatchBack",

//     CalculateAge: function(Year=2000){

//         return Year * 5;

//     }

// }

// console.log("Car price is ",car.CalculateAge());

//Use of this

Person={
Name:"Abbas",
City:"Lahore",
birthYear:1980,
Job:"Software Engineer",

Summary: function(){
 return `${this.Name} lives in ${this.City}, and he DOB is ${this.birthYear} and He is a ${this.Job}`
 
}

}


console.log(Person.Summary())