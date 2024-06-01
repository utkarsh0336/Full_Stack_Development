// async function greet(){
//     return "hello world !";
// }

// greet().then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was : ",result);
// })
// .catch((err) =>{
//     console.log("promise was rejected with err : ",err);
// });

// let demo = async () =>{
//     return 5;
// }

// let h1 = document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//          h1.style.color = color;  
//          resolve();
//      }, delay);
//     })
// }

// async function demo(){
//     await changeColor("red",1000);
//    await changeColor("orange",1000);
//     await changeColor("green",1000);
//     changeColor("blue",1000);
// }

// let jsonResponse = '{"fact":"The leopard is the most widespread of all big cats.","length":51}';

// let validrs = JSON.parse(jsonResponse);
// console.log(validrs);

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log(response);
// }).catch((err)=>{
//     console.log(err);
// })

// async function getFacts(){
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }

// async function getFacts(){
//     try{
//     let res  = await axios.get(url);
//     return res.data.fact;
// }
// catch(e){
//     console.log("error - ",e);
//     console.log("No fact found");
// }
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#Fact");
//     p.innerText = fact;

// })

// const url = "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config = {headers : {Accept : "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=india?state-province=";
let btn = document.querySelectorAll("button");
let state;
btn[1].addEventListener("click", async ()=>{
    state = document.querySelector("input").value;
    console.log(state);
    let colleges = await getColleges(state);
    show(colleges);
});

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        if(col.state-province == state){
            console.log(col.name);
            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
        }

        
    }
}
async function getColleges(state){
    try{
        let res = await axios.get(url+state);
        return (res.data);
    }
    catch(e){
        console.log("error -",e);
        return [];
    }
}