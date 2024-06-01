// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log('div was clicked');
// })

// ul.addEventListener("click",function(){
//     console.log('ul was clicked');
// })


// for (li of lis){
// li.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log('li was clicked');
// })
// }

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add(".delete");
    item.appendChild(delBtn);
    
    
    ul.appendChild(item);
    inp.value = "";
    // console.log(item);
});

// let btn_del = document.querySelectorAll(".delete");
// for(delBtn of btn_del){
//     delBtn.addEventListener("click",function(){
//         // console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

ul.addEventListener("click",function(event){
    // console.log("clicked");
    // console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem);
        console.log("Delete");
        listItem.remove();
    }
    
    
})


// console.dir(inp);
