console.log("Array Learning");

// let CharArray = [];
// let numArray=[1,2,3,4,5];
// CharArray = ("We Are Very Good Boys").split(" ");

// CharArray.reverse()// this is mutated function its changes the origiral array

// let concatarray= CharArray.concat(numArray);
// console.log(concatarray,CharArray)
// CharArray.reverse()// TO BRING IT BACK IN ORIGINAL
// let joined= CharArray.join(" ")
// console.log(joined);

// let slicearray= concatarray.slice(2,4);
// // console.log(slicearray);
// console.log(numArray[numArray.length-1]); //this will also return a value
// console.log(numArray.at(3)) // this will only return the value
// Higher Order functions

// let salaries=[1000,2000,3000,4000,5000];
// console.log(salaries);
// console.log("map")
//  let mapSalaries = salaries.map( (element)  => { // map function return an array of same length
//       let increment= element/2;
//       return( increment+element)
//  })
//  console.log(mapSalaries)

//  console.log("foreach")
// salaries.forEach( element=>{ // foreaach functon does not return anything

//     let increment = element/2;
//     console.log(increment+element)
//  })
 

//  array filter method


// let Students=["Imran","Ahmad","Abbas","Aslam","Rashid","Mukhtar","Changaiz"]
// console.log(Students);

// let filterArrayStudents= Students.filter(e=>{


//     return e.charAt(0)=='A' ; // it will only return the values that are already in the array, on different calculation on results
// })   
    

// console.log(filterArrayStudents)

// Array Reduce Method

// let nums = [10, 20, 30, 40, 50, 60, 70];
// total = 0;
// sum = nums.reduce( (sum, element) => {
 
//     result = sum + element;
//     console.log(sum)
//     return result;

// },0)
// console.log("after calculation", sum);


//  let words=["We","are","living","in","Lahore"];
//  empty="";
//  sentense=  words.reduce( (tempstrin,element) => {
// return tempstrin +" "+ element;
//  },"Ahmad")
//  console.log(sentense)

// Find Method and findindex method

// let Students=[{id:1, stdname:"Abbas"},{id:"2",stdname:"Ahmad"},{id:"3",stdname:"Kashif"},{id:"4",stdname:"Asad"}];
// res=Students.find( e=>{
//     return e.stdname.at(0)==='A'
// }


    
// )
// console.log(res);

// some and any every method
// some return true if some condition get true on any of array element
// every return true if all elements of array fullfill a condition


// let Students=["Ahmad","Asad","Kashif","Farhat","Mubarak"];

// result= Students.some(e=>{

//     return e.length===4

// } )
// console.log("Result of some",result);
// result= Students.every(e=>{

//     return e.length>=4

// } )
// console.log("Result of Every",result);

//Flat Map Array function

let Items=[ {id:1,itemname:"table",price:2000},
{id:2,itemname:"mobile",price:3000}, 
{id:3,itemname:"watch",price:1000}, 
{id:4,itemname:"glasses",price:1000} ,   ]

console.log(Items)

order=Items.flatMap(e=>{  // it makes array flat.. its finish if there is any array element is an arry it make him part of upper array

return (e.price>1000?[e,{id:e.id,itemname:"ribbon",price:0}]:null)

})
console.log(order);