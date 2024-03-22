// EVENTS
let inp = document.querySelector('input')
let h1 = document.querySelector('h1')
let menu = document.querySelector('.menu')
let btn = document.querySelector('.btn')
let back = document.querySelector('.comeback')

// When we opened the Dashboard 
btn.addEventListener('click',()=>{
   menu.style.display = "block"
})
// When we close the Dashboard
back.addEventListener('click',()=>{
   menu.style.display = "none"
})





