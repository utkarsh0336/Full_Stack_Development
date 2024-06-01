// let arr = [1,2,3,4,5];

// function print(el){
//     console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// });


// let num = [1,2,3,4];
// let double = num.map((el) => {
//     return el*2;
// });

// console.log(double);

// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((num) => (num % 2 == 0));
// console.log(even);

// let nums = [1,5,3,9];
// let check = nums.every((el) => (el % 2 == 1));
// console.log(check);
// let checko = nums.some((el) => (el % 2 == 1));
// console.log(checko);

// let nums = [1,2,3,4];
// let reduce = nums.reduce((res,el) => (res * el));
// console.log(reduce);
 

// Finding maximum element in an array

// let nums = [2,3,4,5,3,4,7,8,1,2];
// let maxi = nums.reduce((max,el) => {
//     if(el > max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(maxi);

// let nums = [10,20,30,50,60,100];
// let checkMultipleOf10 = nums.every((el) => (el % 10 == 0));
// console.log(checkMultipleOf10);

// let nums = [2,3,4,5,3,4,7,8,1,2];
// let mini = nums.reduce((min,el) =>{
//     if(min < el) return min;
//     else return el;
// });
// console.log(mini);


//Default Parameter

// function sum(a,b = 3){
//     return a + b;
// }
// let sum1 = sum(2);
// console.log(sum1);

// let arr = [1,2,3,4,5];
// console.log(Math.min(...arr));
// console.log(...arr);
// console.log(..."apnacollege");

// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let char = [..."hello"];
// console.log(char);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums = [...odd, ...even];
// console.log(nums);

// let data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// let dataCopy = {...data,id: 123};
// console.log(dataCopy);

// let arr = [1,2,3,4,5];
// let obj1 = {...arr}; //obj1 -> key:val ...key gets the value of indices and val is the value of the element of the array (Same will be operated at the strings)
// console.log(obj1);


// function sum(...args){
//     for(let i = 0;i<args.length;i++){
//         console.log("You gave us: ",args[i]);
//     }
// };

// function min(){
//     console.log(arguments);
// }

// console.log(min(1,2,3,4));

// function sum(...args){
//     return args.reduce((add,el) => add+el);
// }

// console.log(sum(1,2,3,4));


// let names = ["tony","bruce","steve","peter"];
// let [winner,runnerup] = names;
// console.log(winner,runnerup);


//Destructuring object

// const student = {
//     name : "karan",
//     age : 14,
//     class : 9,
//     subjects : ["hindi","english","math","science","social studies"],
//     username : "karan123",
//     password : 1234
// };

// const {username:user,password:pass} = student;
// console.log(user);

// let arr = [1,2,3,4,5,6];
// const sq_sum = arr.reduce((sum,el) => {
//     sum += (el*el);
//     return sum;
// });

// console.log(sq_sum);

// let arr = [1,2,3,4,5];
// let newArr = arr.map((el) => (el + 5));
// console.log(newArr);

// let arr = ["tony","steve","peter","doctor"];
// let newArr = arr.map((el) =>{
//     return el.toUpperCase();
// });
// console.log(newArr);

