console.log("Array Learning");

let CharArray = [];
let numArray=[1,2,3,4,5];
CharArray = ("We Are Very Good Boys").split(" ");

CharArray.reverse()// this is mutated function its changes the origiral array

let concatarray= CharArray.concat(numArray);
console.log(concatarray,CharArray)
CharArray.reverse()// TO BRING IT BACK IN ORIGINAL
let joined= CharArray.join(" ")
console.log(joined);

let slicearray= concatarray.slice(2,4);
console.log(slicearray);