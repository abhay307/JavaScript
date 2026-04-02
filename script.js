// let bulb = document.querySelector("#blub")
// let on = document.querySelector("#on")
// let off = document.querySelector("#off")


// on.addEventListener("click", function(){
//   bulb.style.backgroundColor = "yellow"
// })

// off.addEventListener("click", function(){
//   bulb.style.backgroundColor = "white"
// })



let bulb = document.querySelector("#blub")
let on = document.querySelector("#on")


let flag = 0 //1

on.addEventListener("click", ()=>{
   if(flag === 0){
    bulb.style.backgroundColor = "yellow"
    on.innerHTML = "Off"
    flag = 1
   }else {
    bulb.style.backgroundColor = "white"
    on.innerHTML = "On"
    flag = 0
   }
})


