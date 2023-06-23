
// setting item in the local storage
// localStorage.setItem("name","Abbas")
// localStorage.setItem("fname","Sadiq")
//localStorage.setItem("system","cartsystem")

//getting item form local storage

console.log(localStorage)

// console.log(localStorage)
// localStorage.removeItem("system") // to delete one item at time
// we can clear the whole local storage. by clear method
localStorage.clear();

cartObject=[
    {
        itemId:1,
        itemName:"Water Glass",
        itemAvailability:true,
        itemQuantity:100
},
{
    itemId:2,
    itemName:"Steel Glass",
    itemAvailability:true,
    itemQuantity:50
},
{
    itemId:3,
    itemName:"Stone Glass",
    itemAvailability:false,
    itemQuantity:10
},
{
    itemId:4,
    itemName:"Plastic Glass",
    itemAvailability:true,
    itemQuantity:1000
}
]

let itemsString=JSON.stringify(cartObject) // we can convert object in json strings
// console.log(itemsString);
localStorage.setItem("product",itemsString);  //  this is how we store value in browser local storage

// let objectString= localStorage.getItem("product")
localStorageObject=localStorage.getItem("product") // hwo to get back
frmobj=JSON.parse(localStorageObject) // we will parse json string again object with it
console.log (frmobj);
