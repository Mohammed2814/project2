const box = document.querySelector('.box')
const search = document.querySelector('#search')
const catBtu = document.querySelectorAll('.cat-cont button')
const CC = document.getElementById("CC")
const alerts = document.querySelector(".alert")
const icons = document.querySelector(".alert .icons")
const yes = document.querySelector(".alert .icons i.fa-check")
const x = document.querySelector(".alert .icons i.fa-xmark")
const alertsName = document.querySelector(".alert h3")
const scroll = document.querySelector(".scroll")
const scrollb = document.querySelector(".scroll button")



let cart = JSON.parse(localStorage.getItem("cart")) || []
const Products = [
    {
        ProImage : "images/laptops/DellPrecisionEdge.png",
        ProName : "Dell Precision Edge",
        ProCategory : "laptops",
        ProPrice : {
            old : 8000,
            new : 6500
        },
        amount : 1
    },
    {
        ProImage : "images/headphones/EchoHorizon.png",
        ProName : "Echo Horizon",
        ProCategory : "headphones",
        ProPrice : {
            old : 800,
            new : 500
        },
        amount : 1
    },
    {
        ProImage : "images/cameras/AzureVisionX.png",
        ProName : "Azure Vision X",
        ProCategory : "cameras",
        ProPrice : {
            old : 5500,
            new : 4700
        },
        amount : 1
    },
    {
        ProImage : "images/phones/SamsungGalaxyZenith.png",
        ProName : "Samsung Galaxy Zenith",
        ProCategory : "phones",
        ProPrice : {
            old : 8000,
            new : 6800
        },
        amount : 1
    },
    {
        ProImage : "images/laptops/HPAuraProBook.png",
        ProName : "HP Aura ProBook",
        ProCategory : "laptops",
        ProPrice : {
            old : 12000,
            new : 10000
        },
        amount : 1
    },
    {
        ProImage : "images/headphones/RogueAudioPro.png",
        ProName : "RogueAudio Pro",
        ProCategory : "headphones",
        ProPrice : {
            old : 1100,
            new : 950
        },
        amount : 1
    },
    {
        ProImage : "images/laptops/MacBookObsidianStealth.png",
        ProName : "MacBook Obsidian Stealth",
        ProCategory : "laptops",
        ProPrice : {
            old : 20000,
            new : 18000
        },
        amount : 1
    },
    {
        ProImage : "images/phones/PixelAuraFlow.png",
        ProName : "Pixel Aura Flow",
        ProCategory : "phones",
        ProPrice : {
            old : 9000,
            new : 7800
        },
        amount : 1
    },
    {
        ProImage : "images/headphones/LuminaClarity.png",
        ProName : "Lumina Clarity",
        ProCategory : "headphones",
        ProPrice : {
            old : 800,
            new : 500
        },
        amount : 1
    },
    {
        ProImage : "images/laptops/AlienwareQuantumCore.png",
        ProName : "Alienware Quantum Core",
        ProCategory : "laptops",
        ProPrice : {
            old : 7000,
            new : 5500
        },
        amount : 1
    },
    {
        ProImage : "images/cameras/AuroraGoldPro.png",
        ProName : "Aurora Gold Pro",
        ProCategory : "cameras",
        ProPrice : {
            old : 4500,
            new : 3700
        },
        amount : 1
    },
    {
        ProImage : "images/phones/HuaweiNovaPrism.png",
        ProName : "Huawei Nova Prism",
        ProCategory : "phones",
        ProPrice : {
            old : 6300,
            new : 5800
        },
        amount : 1
    },
    {
        ProImage : "images/headphones/VortexBlazeGaming.png",
        ProName : "VortexBlazeGaming",
        ProCategory : "headphones",
        ProPrice : {
            old : 1500,
            new : 1250
        },
        amount : 1
    },
    {
        ProImage : "images/laptops/ROGZenithBlaze.png",
        ProName : "ROG Zenith Blaze",
        ProCategory : "laptops",
        ProPrice : {
            old : 11000,
            new : 9000
        },
        amount : 1
    },
    {
        ProImage : "images/cameras/PhantomLux5000.png",
        ProName : "Phantom Lux 5000",
        ProCategory : "cameras",
        ProPrice : {
            old : 5000,
            new : 3500
        },
        amount : 1
    },
    {
        ProImage : "images/phones/iPhoneOnyxPro.png",
        ProName : "iPhone Onyx Pro",
        ProCategory : "phones",
        ProPrice : {
            old : 10000,
            new : 8500
        },
        amount : 1
    },
    {
        ProImage : "images/headphones/QuantumPulseX.png",
        ProName : "Quantum PulseX",
        ProCategory : "headphones",
        ProPrice : {
            old : 1000,
            new : 850
        },
        amount : 1
    },
]
// display
function displayfun(){
    item = []
    Products.forEach((e, index)=>{
        item +=`
        <div class="cards">
            <div class="card-img">
                <img src="${e.ProImage}" alt="">
            </div>
            <div class="card-body">
                <p>${e.ProName}</p>
                <span> ${e.ProCategory} </span>
                <div class="prices">
                    <p><del>$${e.ProPrice.old}</del></p>
                    <p> $${e.ProPrice.new} </p>
                </div>
                <div class="reviews">
                    <p>(14 reviews)</p>
                </div>
                <div class="stars">
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                </div>
                <div class="card-Action">
                    <button onclick='addcart(${index})'><i class="fa-solid fa-cart-shopping"></i></button>
                    <button><i class="fa-regular fa-heart"></i></button>
                    <button><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
        </div>`
        box.innerHTML = item
    })
}
displayfun()
// search
search.onkeyup = function(){
    let item = []
    Products.forEach((e ,index)=>{
        if(e.ProName.toLocaleLowerCase().includes(this.value.toLocaleLowerCase())){
            item +=`
        <div class="cards">
            <div class="card-img">
                <img src="${e.ProImage}" alt="">
            </div>
            <div class="card-body">
                <p>${e.ProName}</p>
                <span> ${e.ProCategory} </span>
                <div class="prices">
                    <p><del>$${e.ProPrice.old}</del></p>
                    <p> $${e.ProPrice.new} </p>
                </div>
                <div class="reviews">
                    <p>(14 reviews)</p>
                </div>
                <div class="stars">
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                </div>
                <div class="card-Action">
                    <button onclick='addcart(${index})'><i class="fa-solid fa-cart-shopping"></i></button>
                    <button><i class="fa-regular fa-heart"></i></button>
                    <button><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
        </div>`
    }if(item.length > 0){
        box.innerHTML = item
    }else{
        box.innerHTML =''
    }
}
)
}
// catogory select
catBtu.forEach((e)=>{
    
    e.onclick = function(){
        box.innerHTML = ''
        catBtu.forEach((el)=>{
            el.classList.remove('Active')
        })
        this.classList.toggle('Active')
        Products.forEach((e, index)=>{
            if(this.innerHTML == "All"){
                displayfun()
            }else
                if(e.ProCategory.toLocaleLowerCase().startsWith(this.innerHTML.toLocaleLowerCase())){
            box.innerHTML += `
        <div class="cards">
            <div class="card-img">
                <img src="${e.ProImage}" alt="">
            </div>
            <div class="card-body">
                <p>${e.ProName}</p>
                <span> ${e.ProCategory} </span>
                <div class="prices">
                    <p><del>$${e.ProPrice.old}</del></p>
                    <p> $${e.ProPrice.new} </p>
                </div>
                <div class="reviews">
                    <p>(14 reviews)</p>
                </div>
                <div class="stars">
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                 <i class="fa-regular fa-star"></i>   
                </div>
                <div class="card-Action">
                    <button onclick='addcart(${index})'><i class="fa-solid fa-cart-shopping"></i></button>
                    <button><i class="fa-regular fa-heart"></i></button>
                    <button><i class="fa-solid fa-eye"></i></button>
                </div>
            </div>
        </div>`
        }
    }
        )
        
    }
})
//cart count
function Cartcount(){
    CC.innerHTML = cart.length
}
// add to cart  
function addcart(index){
    let incart = 0
    cart.forEach((e) =>{
        if(e.ProName == Products[index].ProName){
                alerts.classList.add('active')
                icons.style.border = ' 2px solid #d10023';
                yes.style.opacity = '0'
                x.style.opacity = '1'
                alertsName.innerHTML = `<h3>
                <span class="Name">${Products[index].ProName}</span>
                is already added to your cart.
                </h3>`
                incart = 1
        }})
        if(incart == 0){
        alerts.classList.add('active')
        cart.push(Products[index])
        localStorage.setItem("cart",JSON.stringify(cart))
        yes.style.opacity = '1'
        x.style.opacity = '0'
        icons.style.border = '2px solid rgb(52, 183, 52)'
        alertsName.innerHTML = 
        `<h3>
        <span class="Name">${Products[index].ProName}</span>
        has been added to your cart successfully.
        </h3>`
        }
    Cartcount()
    setTimeout(function(){
        alerts.classList.remove('active')
    },2000)
}
Cartcount()

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