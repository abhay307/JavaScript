/**
 * Mouse events
 * 1. click
 * 2. dblclick
 * 3. mousedown 
 * 4. mouseup
 * 5. mouseenter - mouseover
 * 6. mouseleave - mouseout
 * 7. mousemove
 * 8. contextmenu
 * 
 * Keyboard events
 * 1. keydown
 * 2. keyup
 * 3. keypress      keydown + keyup --> keypress
 * 
 * 
 * form event
 * 1. submit --> form submit
 * 2.rest --> form ki value reset
 * 3. focus
 * 4. blur
 * 5. input
 * 6. change
 * 
 * 
 * Touch events
 * 1. touchstart : finger touches the screen
 * 2. touchmove : finger moves on the screen
 * 3. touchend : finger removed from the screen
 * 4. touchcancel : finger removed from the screen'
 * 
 * 
 * window events
 * 1. load -> page and resources load 
 * 2. DOMContentLoaded - > dom html achhe load ho jaaye
 * 3. lazy loading on 
 */

//event object : all detail regarding to event

// const abc = document.querySelector("#suresh")

// abc.addEventListener("click", function(e){
//     console.log(e.target)
// })

let form = document.querySelector("form")
let reset = document.querySelector("#reset")
let nameInput = document.querySelector("#nameInput")
let submitBtn = document.querySelector("#submitBtn")

// form.addEventListener("submit", function(){
//     alert("form submit successfully")
// })

// submitBtn.addEventListener("touchcancel", function(e){
//     alert("element touched remove")
// })

window.addEventListener("scroll", function(){
    console.log("window scroll")
})