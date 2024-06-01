// let img1 = document.getElementsByClassName("oldImg");
// for(let i = 0;i<img1.length;i++){
//     img1[i].src = "spiderman_img.png";
//     console.log(`Value of img number ${i+1} is changed`);
// }


// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a"));


// let para = document.querySelector("p");
// console.log(para);

// let links = document.querySelectorAll(".box a");
// for(let i = 0;i<links.length;i++){
//     links[i].style.color = "purple";
// }

// let para = document.createElement("p");

let body = document.querySelector("body");
let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText = "Click me";
body.append(input);
body.append(btn);

input.setAttribute("placeholder","username");
input.setAttribute("id","btn");

let button = document.querySelector("#btn");
button.classList.add("btnclass")

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("h1class");
body.append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);



