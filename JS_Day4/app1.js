// Question 1

const prompt = require('prompt-sync')();
// let arr = [1,2,3,4,5,6,2,3];
// let num = prompt("Enter the number that you want to delete\n");
// for(let i = 0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// for(ele of arr){
//     console.log(ele);
// }

//Question 2
// let num = prompt("Enter any number : ");
// num = parseInt(num);
// let cnt = 0;
// while(num > 0){
//     cnt++;
//     num = Math.floor(num/10);
//     num = parseInt(num);
// }
// console.log(cnt);

//Question 3
// let num = prompt("Enter any number : ");
// num = parseInt(num);
// let sum = 0;
// while(num > 0){
//     sum += num%10;
//     num = Math.floor(num/10);
// }
// console.log(`The sum of the digits is ${sum}`);


//Question 4
// let num = prompt("Enter the number you want the factorial of : ")
// num = parseInt(num);
// let prod = 1;
// for(let i = 1;i<=num;i++){
//     prod *= i;
// }
// console.log(`The factorial of ${num} is ${prod}`);

//Question 5
let arr = [];
let n = prompt("Enter the size of the array : ");
n = parseInt(n);
for(let i = 0;i<n;i++){
    arr[i] = prompt(`Enter the element number ${i+1} : `);
}
// for(let i = 0;i<n;i++){
//     console.log(arr[i]);  PRINT ARRAY
// }

let maxi = Number.MIN_SAFE_INTEGER;
maxi = parseInt(maxi);
for(let i = 0;i<n;i++){
    maxi = Math.max(maxi,arr[i]);
}
console.log(`The maximum element is ${maxi}`);