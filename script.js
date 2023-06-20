let resultedElement= document.querySelectorAll('p')

// console.log(resultedElement);
// console.dir(document.querySelector('.digimark')); 
// console.log(document.querySelector('.digimark')); // to select an element with class
console.log(document.querySelectorAll('#marked')); // to select an element with ID

let htmlelement= document.querySelector('.digimark')
console.log("innerhtlm",htmlelement.innerHTML); // it includes starting and ending space
console.log("innertext",htmlelement.innerText); // it ignores starting and ending space

let headingElement=document.querySelector('h1');
headingElement.innerHTML="<i> Muhammad Abbas sadiq</i>";
headingElement.style.color="red" // we can change the style
headingElement.style.backgroundColor="blue"
headingElement.classList.add("myClass")  // adding class to the html Element
headingElement.classList.add("myClass1")
headingElement.classList.remove("myClass1"); // removing class from html element