// arrays and object.. by value or by ref


let valueArray = [1, 2, 3, 4, 5]

let refArray = valueArray; // here we have make 2 refrence of same variable arrray

refArray[5] = 6
// anotherArray.shift();// removes first element of Array
refArray.push(7);
refArray.pop() //remove last element of Array

console.log("value Array", valueArray);
console.log("another array", refArray);

let byValArray = [...valueArray];



byValArray.pop();
// refArray.pop();
console.log("value Array", valueArray);
console.log("another array", refArray);
console.log("byval Array", byValArray);