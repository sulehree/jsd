// let DataFetch = (dataSource) => {
//     let request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {

//         if(request.readyState===4 && request.status===200)
//         console.log(JSON.parse(request.responseText));
//         else if(request.readyState===4)
//         console.log(`Error Status:${request.status}`)

//     })

//     request.open("GET", dataSource);
//     request.send();

// }

// DataFetch("myData.json");
// DataFetch("https://jsonplaceholder.typicode.com/posts");

// Asyncrhonous Java Ajax
// Use of Fetch API

// fetch("myData.json").then((dataResponse) => {
//     // .json function also return a promise
//     console.log("FetchPromise Resolved",dataResponse)
//     return dataResponse.json()// as it is also return a promise.. we can use it again in chain with "then" method of promise

// }).then((data)=>{
// console.log(data);

// }).catch((error) => {
//     console.log("FetchPromise Failed",error)
// })

// Async and wait

let getTodos = async () => {
    let response = await fetch("myDatad.json");
    // Custom Error handling
    if (response.status!==200){
        throw new Error("custom error: Data is not Fetched"); // a good way to handle error.. use Error Object;
    }

    let responsedata = await response.json();
    return responsedata;

}


getTodos().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})



try {
    let x=2;
    const y=6;
    y=x;
} catch (error) {
    console.log(error);
}