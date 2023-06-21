//Events Bubbling and Delegation 
// let bodyElement = document.querySelector('body')
// bodyElement.addEventListener('click',(e)=>{

//     e.target.style.backgroundColor = "green";
//     e.target.style.textAlign="center"
//     console.log("body event");

// })


// console.log(bodyElement);

let eventElement = document.querySelector('.clickme');
eventElement.addEventListener('click', () => {
    let li = document.createElement('li') // this is how we can create html elemetn. we just give name like pi, p, div, 
    li.textContent = "i am li";
    ulElement.append(li); // we can append it in start or prepend it on last as per function
})
// Get Ul Element

let ulElement = document.querySelector('ul'); // when an event in child runs, its also runs in the parents of it.. so as li element event runs.ul event will automatically will run. and if we have definced body event that will also got run
ulElement.style.listStyleType = "circle"
ulElement.addEventListener('click', (e) => {
    //    console.dir(e.target)
    if (e.target.nodeName = "li") {
        e.target.remove();

    }
})


// let liElement = document.querySelectorAll('li')

// liElement.forEach(element => {

//     element.addEventListener('click', e => {
//         console.log("inside LI Element")
//     })
// })
