const bar = document.getElementById("bar");
const menu = document.getElementById("menu")
const close = document.getElementById("closeMenu");
const body = document.querySelector("body");


bar.addEventListener("click", () =>{
    menu.classList.toggle("expand");
    document.body.classList.toggle("expand");
});

close.addEventListener("click", () => bar.click());


var main = document.getElementById("main");
var small = document.getElementsByClassName("small");
var other = document.getElementById("featured");

for(let i = 0; i < small.length; i++){
    small[i].onclick = function(){
        main.src = small[i].src;
    };
}



const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2050,
    reset: true
})

sr.reveal("#hero, #featuer, #products, #banner, #sm-banner, #banner2, #newsletter, footer", {delay:400});
sr.reveal("#page-header, #single-pro", {delay:100});