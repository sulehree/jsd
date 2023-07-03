// Object Literals
 let  openingHours={
    Monday:{open:"08:00 AM",close:"07:00 PM"},
    Tuesday:{open:"08:00 AM",close:"07:00 PM"},
    Wednesday:{open:"08:00 AM",close:"07:00 PM"},
    Thursday:{open:"08:00 AM",close:"07:00 PM"},
    Friday:{open:"08:00 AM",close:"01:00 PM"},
    Saturday:{open:"08:00 AM",close:"10:00 PM"}
    }
  let hotel={
        hotelName:"Nishat Hotel",
        hotelLocation:" Johar Town Lahore",
        foodCategories:["Desi","Chines","Continental","Italian","Turkish"],
        foodMenu:["FoodA","FoodB","FoodC"],
        NewOpeningHours:openingHours,
        makeOrder(){}
       
   }


  console.log(hotel);

// // console.log("ES6 Example");
// // Array Destructureing


// // let items=[1,2,3,4,5];
// // let [a,b,c,d,e,f]=items;  // Array Destruction
// // console.log(a,b)

// // let [First , Second ]=hotel.foodCategories; // we can skip the values of array,  here we only getting firs and third value

// // console.log("Before swaping\t",First,Second);

// // [Second,First] = [First,Second];

// // console.log("after swaping\t",First,Second);


// //  Object Destructuring 
// let hotel = {
//     hotelname: "Nishat Hotel",
//     hotelLocation: "Johar Towm",
//     foodCategories: ["Pakistani", "Chines", "American"]
// }

// // let { hotelname, Location, foodCategories } = hotel; // here we are assinging object in a object to outer objecs.. name should be same
// // console.log(hotelname, Location, foodCategories)

// // Another way of Object Destructuring but with to make Variable of Different Name

// // let { hotelname:NewHotelName, Location:NewLocation, foodCategories:NewFoodCategories } = hotel;
// // console.log("With New Names",NewFoodCategories);
// // we can use default values

// let {hotelname="MyHotel",hotelLocation="Unknown",foodCategories}=hotel; // we can also assign default values.. if object get change.

// console.log(hotelname,hotelLocation,foodCategories)


// let nums=["first","second","third"]
// // console.log(...nums); // ... spared operator.. it will only print the values with a space
// // // let newarray=[1,2,nums]
// // let newarray=[1,2,...nums]
// // console.log(newarray.concat(nums))// concat is immuteable funciton .. it does not change original array
// // console.log(newarray)
// // spread operator

// // let [a,...b]=nums;
// // console.log(...b); //

// // Short Circuiting on && and|| operators

// // False Values in Java Script:   0 , null, false, undefined,"" ( Empty String) 
// let andResult="First Param" && 0 &&"Second Param" && "undefined" && null; // here result will get any false value in the statement or last true value in the statement

// let orResult=undefined|| 0 ||false || ""|| null; // here result will get any true value in the statement or last false value in the statement


// console.log("AndResult\t",andResult);
// console.log("OrResult\t", orResult);

// console.log("For Of loop")


// let menu=[1,2,3,4,5,6,7,8];
//     menu.reverse();

//  for(let a of menu.entries()){
//     console.log(a);
    
// }
