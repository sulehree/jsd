// Object Literals
let varName="abbas"
  let aMap= new Map();
  aMap.set("mapName","MyMAP");
  aMap.set(true,"Theek");
  aMap.set(1,"ONE")
aMap.set(varName,"karachi");
aMap.set("city","Lahore").set("country","Pakistan").set("province","Punjab")
aMap.set(["A","b"],["4","5" ])
console.log(aMap)

 
 for( let a of aMap){
  console.log(Object.values(a)[0],Object.values(a)[1]);
  // console.log();
  
 }

//  let  openingHours={
//                     Monday:{open:"08:00 AM",close:"07:00 PM"},
//                     Tuesday:{open:"08:00 AM",close:"07:00 PM"},
//                     Wednesday:{open:"08:00 AM",close:"07:00 PM"},
//                     Thursday:{open:"08:00 AM",close:"07:00 PM"},
//                     Friday:{open:"08:00 AM",close:"01:00 PM"},
//                     Saturday:{open:"08:00 AM",close:"10:00 PM"},
//                     Sunday:{open:"08:00 AM",close:"10:00 PM"},
//                     }
//                     menuType="Gold Menu" // Computed Property Name
//   let hotel  ={
//                     hotelName:"Nishat Hotel",
//                     hotelLocation:" Johar Town Lahore",
//                     foodCategories:["Desi","Chines","Continental","Italian","Turkish"],
//                     foodMenu:["FoodA","FoodB","FoodC"],
//                     NewOpeningHours:openingHours,
//                     makeOrder(){},
//                     [menuType]:["Different food Items"] // we can chnge the property name by placing the square brackets around it.. 
       
//               }


 // Optional Chaining Operator.. 
           
 
              // let objectKeys= Object.keys(hotel) // by this we can get the keys of any array in an array
              // console.log(objectKeys);
              // let objectEntries= Object.entries(hotel.NewOpeningHours);
              // // console.log(objectEntries)
              // for(let [day,{open,close}] of objectEntries){
                
              //   // console.log(`Our Hotel Opens on ${day.padEnd(10)}:\tOpening Timing: ${open} and Closing Timing: ${close}`)
                
              // }


      
// Making an Array of uniquie values of given many values
//  let itemSet=new Set( Object.values(hotel.foodCategories)) // Set() will return the set of unique values
// console.log(itemSet);
// console.log(itemSet.add("pakistan"))
// // console.log(itemSet.delete("pakistan"))
// console.log(itemSet);
// console.log(itemSet.size);
// // console.log("ES6 Exampl.e");
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
    
//