// const student = {
//     name: "Utkarsh",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         console.log(this);  
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`${this.name} has got average marks ${avg}`);
//     }
// };

// student.getAvg();

// try{
//     console.log(a);
// }
// catch(err){
//     console.log("variable a does not exist");
//     console.log(err);
// }

// const sum = (a,b) => {
//     console.log(a+b);
// }

// const mul = (a,b) => (
//     a*b
// );

// let pro = mul(2,3);
// console.log(pro);

// console.log("Hi There!")
// console.log("Welcome to");
// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);

// let id = setInterval( () => {
//     console.log("Apna College")
// }, 2000);

// console.log(id);

// let id2 = setInterval( () => {
//     console.log("Hello World")
// }, 3000);

// console.log(id2);


// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this, // global
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);  // parent's scope -> window
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout( () => {
//             console.log(this) // student
//         },2000);
//     },
//     getInfo2: function(){
//         setTimeout( function() {
//             console.log(this) // window
//         },2000);
//     },
// };

// const a = 5; // global scope

// const sqrt = (n) => {
//   return n*n;
// };

// let sq = sqrt(3);
// console.log(sq);


// let id = setInterval( () => {
//     console.log("Hello World")
// },2000);

// setTimeout( () => {
//     clearInterval(id)
// },10000);


// const arrayAverage = (arr) => {
//     let avg = 0;
//     let sum = 0;
//     for(let i = 0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     avg = sum/arr.length;
//     return avg;
// }

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let average = arrayAverage(arr);
// console.log(average);

// const isEven = (n) => (
//     n%2 == 0
// );

// console.log(isEven(8));

// const object = {
//     message:'Hello, World!',
//     logMessage (){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);

let length = 4;
function callback(){
    console.log(this.length);
};

const object = {
    length:5,
    method(callback) {
        callback();
    },
};
object.method(callback,1,2);