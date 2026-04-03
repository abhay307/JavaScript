/**
 * Manipulation of html 
 * innerHTML
 * innerText
 * textContent
 */

// const heading = document.querySelector("#heading")


// heading.innerHTML = "this is new heading"
// heading.innerHTML = "<h2>this is h2 <span>this is span</span></h2>"

// console.log(heading.innerText)
// console.log(heading.textContent)

/**
 * attributes : we can see attributes of any element
 * getAttribute : we can see a value of particular attribute
 * setAttribute : we can set a values of any attribute
 */

// const heading = document.querySelector("#heading")

// heading.setAttribute("class" , "ram")


//creation of element through javascript

/**
 * append : add element at the last of an element
 * prepend : add element at the start of an element
 * before : add element at the start of an element
 * after : add element at the start of an element
 * insertAdjacentElement(position, elem) beforebegin, beforeend, afterbegin afterend
 * remove() : to remove an element
 */
let box = document.querySelector(".box")
let p = document.createElement("p")

// box.innerHTML = "<p>this is p created through javascript</p>"

p.innerText = "this is p created through javascript"

box.append(p)
// p.remove()

// box.remove()





