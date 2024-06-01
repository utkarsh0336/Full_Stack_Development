// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }
// three();

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// setTimeout(()=>{
//     console.log("apna college");
// },2000);

// console.log("hello...");

// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//    setTimeout(() => {
//     h1.style.color = color;  
//     nextColorChange();
// }, delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000);
// })


// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);

// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDb("apna college",()=>{
//     console.log("Success : Your data was saved : ", 10);
// },()=>{
//     console.log("Failure : Weak connection. Data not saved")
// });

// function savetoDb(data){
//     return new Promise((success,failure)=>{
//         let internetSpeed = Math.floor(Math.random()*10) + 1;
//         if(internetSpeed > 4){
//             success();
//         }
//         else{
//             failure();
//         }
//     });
// }

// savetoDb("BIT Mesra")
// .then(()=>{
//     console.log("Data1 Saved");
//     return savetoDb("hello world");
//     }).then(()=>{
//         console.log("Data2 Saved");
// }).catch(()=>{
//     console.log("Promise Rejected");
//     // console.log(request);
// });

