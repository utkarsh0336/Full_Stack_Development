// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick =  function(){
//     alert("button was clicked");
// };

// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("Apna College");
// }


// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;

//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",sayName);
    
    // btn.onmouseenter = function(){
    //     console.log("You entered a button");
    // }
    // console.dir(btn);
// }
// btn.onclick = sayHello;
let btn = document.querySelector("button");
btn.addEventListener("click",function (){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    h3.style.color = randomColor;

    console.log("Color Updated");

});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${blue},${green})`;
    return color;
}




