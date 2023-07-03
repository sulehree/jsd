// console.log("One");
// console.log("TWo");
// console.log("Three");
// setTimeout( // this is async functino that will wait for
//     () => {
//         console.log("Saray Three")
//     }, 3000)
// console.log("Four");
// // setInterval( // this is async functino that will run after every 3 seconds
// //     () => {
// //         console.log("Saray Four")
// //     }, 3000)
// console.log("Five");

// HTTP Request =   AJAX





// let request= new XMLHttpRequest();
// console.log(request,request.readyState);
// // let set an Event handler for getting the data
// request.addEventListener('readystatechange',()=>{
//      console.log(request,request.readyState )
//     // As ready state 4 is our required state where all data has recived so we will chk it first
//     if (request.readyState===4 && request.status===200){ // we are checking.. two conditions.. first is that ready state should be on 4, and secondly we are checking request status code... like 200(successfull) when no error and we get the required data 

//         console.log("Data has fetched,  so Start work on it", request.responseText)
//     }
// })
// // Ready State has 4 values
// // 0	UNSENT	Client has been created. open() not called yet.
// // 1	OPENED	open() has been called.
// // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// // 3	LOADING	Downloading; responseText holds partial data.
// // 4	DONE	The operation is complete.





// // let send this request to send on some server
// // open function is used to set up the request,
// // URL to get Json Data in response
// //https://jsonplaceholder.typicode.com/
// request.open("GET","https://jsonplaceholder.typicode.com/todos") // this is how we setup our request
// // a setup request can be send by the send function
// request.send();




// // http response code
// // Informational responses (100 – 199)
// // Successful responses (200 – 299)
// // Redirection messages (300 – 399)
// // Client error responses (400 – 499)
// // Server error responses (500 – 599)


// we are passing a function as argument
// let ToDo = (callbackFunc, fileSource) => {
//     let request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {

//         if (request.readyState === 4 && request.status === 200) {
//             // console.log("Data has fetched,  so Start work on it", request.responseText)
//             let data = JSON.parse(request.responseText)
//             callbackFunc(undefined, data)
//             // callbackFunc(undefined,request.responseText)
//         } else if (request.readyState === 4) {
//             //  console.log(request.responseText)
//             callbackFunc(`ErrorStatus: ${request.status} , Data Not Found`, undefined);
//         }
//     })

//     // request.open("GET", "https://jsonplaceholder.typicode.com/todos")// with http
//     request.open("GET", fileSource)// with file in local storage
//     request.send();
// }

// we are passing a function as argument
// As ToDo is using some html requst, that include interaction with network, as it is a async function

console.log(1)
console.log(2)
// Call Back Hell.. where we call function in the function to maintain a sequence for asynch functions call
// ToDo((error, data) => {
//     if (error) { console.log(error) }
//     else { console.log(data) }

//     // call of same function in the function
//     ToDo((error, data) => {
//         if (error) { console.log(error) }
//         else { console.log(data) }

//         // call of same function in the function of function

//         ToDo((error, data) => {
//             if (error) { console.log(error) }
//             else { console.log(data) }
//         }, "myData.json")


//     }, "https://jsonplaceholder.typicode.com/todos")



// }, "myData.json");
console.log(3);
console.log(4);



//  User of Promise // an Example

let getSomeThing = () => {
    return new Promise((resolve, reject) => {

        // as only one functino can be called in Promise, We have to apply some condition to call one function from both, resolve or reject

        let num = Math.random();
        if (num < .5) {
            resolve(`Success: ${num}`);
        }
        else {
            reject(`Error: ${num}`);
        }

    })
}

getSomeThing().then((data) => { console.log(data) }).catch((error) => { console.log(error) })


//


// Promise Practical practical example


let ToDo = (fileSource) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {

            if (request.readyState === 4 && request.status === 200) {

                let data = JSON.parse(request.responseText) //
                resolve(data);

            } else if (request.readyState === 4) {

                reject(`Error in Fetching Data due to Error:${request.status}`)

            }
        })
        // request.open("GET", "https://jsonplaceholder.typicode.com/todos")// with http
        request.open("GET", fileSource)// with file in local storage
        request.send();
    })





}

ToDo("myData.json").then((data) => {
    console.log(data);
    return ToDo("https://jsonplaceholder.typicode.com/todos")
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
// above example of promise Chain...