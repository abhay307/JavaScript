// import btnClick from "./functions.js"
//Event handling 

/**
 * - event : event is something that happens in the browser like user clicking,  mouse moving 
 * eg
 * 1. mouse event - click , hover , double click , etc.
 * 2. keyboard event - keypress, keyup , keydown etc
 * 3. form event - input , submit , change etc
 * 4. window envet - scroll, resize etc
 * 
 * //monitorEvents(window)
 */

/**
 * 3 ways to handle events -
 * 1. inline method  --> on , small 
 * 2. property method --> on 
 * 3.listner method
 */


// function ram(){
//     console.log("helo how are you")
// }

// const btn = document.querySelector("#btn")

// btn.onclick = ()=>{
//     console.log("btn is clicked in property method event")
// }

// btn.onclick = ()=>{
//     console.log("btn is clicked twice")
// }

const btn = document.querySelector("#btn")

// btn.addEventListener(event, function) //syntax - way of writing

// btn.removeEventListener("click", function(){
//     console.log("btn click first time")
// })
// btn.removeEventListener("click", function(){
//     console.log("btn click second  time")
// })


 function btnClick(){
    let p = document.createElement("p")
    p.innerHTML = "this is p created in js"
    p.style.backgroundColor = "black"
    p.style.color = "white"
    p.style.padding = "20px"
    let body = document.body
    body.append(p)
}


btn.addEventListener("click", btnClick)

