let inp1 = document.querySelector("#input-1")
let inp2 = document.querySelector("#input-2")
let inp3 = document.querySelector("#input-3")
let rgb1 = document.querySelector(".span-1")
let rgb2 = document.querySelector(".span-2")
let rgb3 = document.querySelector(".span-3")
let copy = document.querySelector(".copy")
let body = document.body
inp1.addEventListener('input' , function(){
    rgb1.textContent = inp1.value
    document.body.style.backgroundColor = `rgb(${inp1.value},${inp2.value},${inp3.value})`
})
inp2.addEventListener('input' , function(){
    rgb2.textContent = inp2.value
    document.body.style.backgroundColor = `rgb(${inp1.value}, ${inp2.value}, ${inp3.value})`
})
inp3.addEventListener('input' , function(){
    rgb3.textContent = inp3.value
    document.body.style.backgroundColor = `rgb(${inp1.value},${inp2.value},${inp3.value})`
})

copy.addEventListener('click' , function(){
    navigator.clipboard.writeText( `rgb(${inp1.value}, ${inp2.value}, ${inp3.value})`)
})