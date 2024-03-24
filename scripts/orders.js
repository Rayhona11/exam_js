//  XOTIRALAR


// ORDERS

let televisions = {
    id:1,
    name:'Television',
    cost:150000
}

let fridge = {
    id:2,
    name:'Fridge',
    cost:5000000,
}

let computers = {
    id:3,
    name:'Computer',
    cost:30000000,
}

let cleaningMachine = {
    id:4,
    name:'Cleaning Machine',
}

let telephones = {
    id:5,
    name:'Telephones',
    cost:2000000,
}


// FUNCTIONS

let cart = localStorage.getItem('products')
if(cart){renderCart()}
else{localStorage.setItem('products',JSON.stringify([]))}
function renderCart(){
    document.querySelector('ul').innerHTML = ''
    let p = JSON.parse(localStorage.getItem('products'))
    p.map((prd)=>{
        let li = document.createElement('li')
        li.innerHTML = prd.name + ' | Soni: ' +  prd.count 
        document.querySelector('ul').append(li)
    })
}


// televisions
let d = document.querySelector('button')
d.addEventListener('click',()=>{
    let prd = {
        name:televisions.name,
        cost:televisions.cost,
        count:1
    }
    let lp = JSON.parse(localStorage.getItem('products'))
    if(lp.length >= 1){
        lp.forEach(t=>{
            if(t.name === televisions.name){
                t.count = t.count + 1
            }else{
                lp.push(prd)
            }
        })
    }else{
        lp.push(prd)
    }
    localStorage.setItem('products',JSON.stringify([...lp]))
    renderCart()
})


// localStorage.clear()


// fridge

let cart2 = localStorage.getItem('orders')




