const bar = document.getElementById("bar");
const menu = document.getElementById("menu")
const close = document.getElementById("closeMenu");

bar.addEventListener("click", () =>{
    menu.classList.toggle("expand");
});

close.addEventListener("click", () => bar.click());

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2050,
    reset: true
})

sr.reveal("#hero, #featuer, #products, #banner, #sm-banner, #banner2, #newsletter, footer", {delay:400});