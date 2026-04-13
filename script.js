/**
 * Manipulation of css --> js se css add krna 
 * 1. using attribute method
 * 2. using style
 * 3. use cssText Property
 * 4. using className property
 * 5. using classList property : add(), remove(), toggle(), contains()
 */



// let h1 = document.querySelector("#h1")
//using attribute
// h1.setAttribute("style", "color:blue; background-color : pink;")


//****using style */
// h1.style.color = "red"
// h1.style.margin = "10px"


//css text****
// h1.style.cssText = "background-color : red; color : white"

let h1 = document.querySelector("#h1")


// h1.className = "red"

console.log(h1.classList.contains("blue"))