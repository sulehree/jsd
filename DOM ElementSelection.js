// let parentElement=document.querySelector(".container")
// console.log(parentElement)
// console.log(parentElement.children)

// // we cannot run foreach method on HTML collection that we got by accessing children
// // we will first convert it into an Array than foreach method will be applied
// console.log(Array.from(parentElement.children))
// parentElement.style
// Array.from(parentElement.children).forEach(element=>{


//     element.classList.add("newStyle");// here we can apply the syle to all the children that we got 


// })

// Accessing parent element from child element
let childElement = document.querySelector('#heading1');
console.log(childElement)
console.log(childElement.parentElement)
// childElement.parentElement.classList.add("another")
childElement.parentElement.style.border = "5px dotted green"
childElement.parentElement.style.textAlign = "center"
console.log(childElement.nextElementSibling);
childElement.nextElementSibling.innerHTML = "hee"