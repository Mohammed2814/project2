const scroll = document.querySelector(".scroll")
const scrollb = document.querySelector(".scroll button")
const span = document.querySelector("#typing");
const mobilediv = document.querySelector('mobile')
const days = document.querySelector ('.days b')
const hours = document.querySelector ('.hours b')
const mins = document.querySelector ('.mins b')
const secs = document.querySelector ('.secs b')
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    prevArrow: $('.prevbtn') ,
    nextArrow: $('.nextbtn') ,
    dots: false,
    responsive: [
        {
            breakpoint:1200,
            settings:{
                slidesToShow:3
            }
        },
        {
            breakpoint:1000,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint:580,
            settings:{
                slidesToShow:1
            }
        }
    ]
  });
});
$('.prevbtn').on('click', function() {
    $('.slider').slick('slickPrev');
});
$('.nextbtn').on('click', function() {
    $('.slider').slick('slickNext');
});
let cart = JSON.parse(localStorage.getItem("cart")) || []
function Cartcount(){
    CC.innerHTML = cart.length
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

// typing effect
document.addEventListener("DOMContentLoaded", () => {
    const text = span.textContent; 
    span.textContent = "."; 
    let i = 0;
    let typing = true;
    const speed = 100;
    const delay = 1000;

    function type() {
        if (typing) {
            span.textContent = text.substring(0, i + 1);
            i++;
            if (i === text.length) {
                typing = false;
                setTimeout(type, delay);
                return;
            }
        } else {
            span.textContent = text.substring(0, i - 1);
            i--;
            if (i === 0) {
                typing = true;
                setTimeout(type, delay);
                return;
            }
        }
        setTimeout(type, speed);
    }
    type();
});
//time handler
let date
function timefun(){
    date = new Date
    days.innerHTML = date.getDay()
    hours.innerHTML = date.getHours()
    mins.innerHTML = date.getMinutes()
    secs.innerHTML = date.getSeconds()
}
timefun()
setInterval(() => {
    timefun()

}, 1000);

