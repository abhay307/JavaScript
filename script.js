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

// let h1 = document.querySelector("#h1")

// // h1.className = "red"

// console.log(h1.classList.contains("blue"))

//create a div tag in html and give it a class and some styling. Now create a new class in css and try to append this class to the div element

// const box = document.querySelector(".box")

// box.classList.add("box2")

//create a simple website with theme change functinality
let body = document.querySelector("body");

const btn = document.querySelector("#btn");

let a = 0;

//1. ans
// btn.addEventListener("click", function () {
//   if (a === 0) {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     a = 1
//   }else{
//      body.style.backgroundColor = "white";
//     body.style.color = "black";
//     a = 0
//   }
// });


//3 ans
// btn.addEventListener("click", function () {
//   body.classList.toggle("dark")
// });


//2nd ans
// btn.addEventListener("click", function () {
//   if (a === 0) {
//    body.className = "dark"
//    a = 1
//   }else{
//       body.className = "light"
//     a = 0
//   }
// });


//event listners