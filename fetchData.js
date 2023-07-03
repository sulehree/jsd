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

    try {
        let response = await fetch("myData.json");
    // Custom Error handling
    // if (response.status!==200){
    //     throw new Error("custom error: Data is not Fetched"); // a good way to handle error.. use Error Object;
    // }

    let responsedata = await response.json();
    return responsedata;
        
    } catch (error) {
        console.log(error.message);
    }
    

}


getTodos().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})



function double(x){return x*x}
// triple=function (x){ return x*x*x}
// tetra=(x)=>{return x*x*x*x}
// console.log(double(2));
// console.log(triple(2));
// console.log(tetra(2));

setTimeout(()=>{
    print (double(5))
},3000)

function print(d){
    console.log(d)
}