const bar = document.getElementById("bar");
const menu = document.getElementById("menu")
const close = document.getElementById("closeMenu");

bar.addEventListener("click", () =>{
    menu.classList.toggle("expand");
});

close.addEventListener("click", () => bar.click());