//Events Handling /// very very important subject
let eventElement = document.querySelector('.clickme');
let ulElement = document.querySelector('ul');
console.log(eventElement);
eventElement.addEventListener('click', () => {
    // console.log("Abbas")
    let li = document.createElement('li') // this is how we can create html elemetn. we just give name like pi, p, div, ul , li
    li.textContent = "i am li";
    ulElement.append(li); // we can append it in start or prepend it on last as per function

    li.addEventListener('click', (e) => { // here we are adding an event on the click 
        e.target.remove();
    })




})

let liElement = document.querySelectorAll('li')
console.log(liElement);

liElement.forEach(element => {

    element.addEventListener('click', e => {
        // console.log("clicked")
        console.log(e.target);
        e.target.style.color = "red";
        e.target.style.backgroundColor = "white";
        //e.target.remove();// this will remove the element
    })
})
