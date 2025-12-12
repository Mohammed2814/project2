const CC = document.getElementById("CC")
const UserCart = document.querySelector(".cart-pro")
const cartinfo = document.querySelector(".Cart-info")
const alerts = document.querySelector(".alert")
const alertsName = document.querySelector(".alert span")
const scroll = document.querySelector(".scroll")
const scrollb = document.querySelector(".scroll button")
console.log(alerts)

let itemindex
let cart = JSON.parse(localStorage.getItem("cart")) || []

let total = 0

// cart count 
function Cartcount(){
    CC.innerHTML = cart.length
}
//total price
function Tprice(){
    total = 0
    cart.forEach(e =>{
        total += e.ProPrice.new * e.amount
    }) 
    cartinfo.innerHTML = `<h2>Total Price:</h2>
                <b>$${total}</b>`
}
Tprice()
Cartcount()
// diplay items 
function displayfun(){
    let item = []
    cart.forEach((e, index) => {
    item +=`
        <div class="Cart-products">
                <div class="id">
                    <b>${index + 1}</b>
                </div>
                <div class="Name">
                    <b>${e.ProName}</b>
                    <p>(headphones)</p>
                </div>
                <div class="image">
                    <img src="${e.ProImage}" alt="">
                </div>
                <div class="amount">
                    <button onclick="amountchange(${index}, 'plus')">+</button>
                    <span>${e.amount}</span>
                    <button onclick="amountchange(${index},'minus')">-</button>
                </div>
                <div class="price">
                    <b>$${e.ProPrice.new * e.amount}</b>
                </div>
                <div class="delete">
                    <button onclick=" remove(${index},'${e.ProName}') ">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
    `
})
if(item.length == 0){
    item += `<h2> Your Cart Is Empty  </h2>
        <a href="shop.html">go to shop ?</a>`
        cartinfo.style.display = "none"
}
UserCart.innerHTML = item
}
displayfun()
// amount handler
function amountchange(index,op){
    if(op == 'plus'){
        cart[index].amount += 1
    }
    else if(cart[index].amount == 1){}
    else{
        cart[index].amount -= 1
    }
    displayfun()
    localStorage.setItem("cart",JSON.stringify(cart))
    Tprice()
}
// removing items
function remove(index, PN){
    alerts.classList.add("active")
    console.log(PN)
    alertsName.innerHTML = `(${PN})`
    itemindex = index
}
function btndel(ob){
    if(ob == 'no'){
    }else{
        cart.splice(itemindex, 1)
        localStorage.setItem("cart",JSON.stringify(cart))
        displayfun()
        Cartcount()
        Tprice()
    }
    alerts.classList.remove("active")
}

// scroll
window.onscroll = function(){
    let scrollp =   this.scrollY * 100 / (document.documentElement.scrollHeight - window.innerHeight)
    if(scrollp > 50){
        scroll.classList.add("on")
        console.log(true);
        
    }else
        scroll.classList.remove("on")
}
scrollb.onclick = function (){
    window.scrollTo(0,0)
}