// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para was clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("Mouse was entered");
// })

// let btn = document.querySelector("button");
// btn.addEventListener("dblclick",function(e){
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(){
//     console.log("key = ",event.key);
//     console.log("code = ", event.code);
//     console.log("key is downed");
// });
// inp.addEventListener("keyup",function(){
//     console.log("key is up");
// });

// let form = document.querySelector("form");
// form.addEventListener("submit",function(){
//     event.preventDefault();
// });


// let user = document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("change changed");
//     console.log("final value = ",this.value);
// })
// user.addEventListener("input",function(){
//     console.log("input changed");
//     console.log("final value = ",this.value);
// })

// let user = document.querySelector("#user");
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// })
// user.addEventListener("mouseout",function(event){
//     event.preventDefault();
//     console.log("Hi");
// });

let btn = document.querySelector("button");
function changeColor(){
    this.style.backgroundColor = "green";
}
btn.addEventListener("click",changeColor);
