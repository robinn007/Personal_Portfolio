const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle
})

let menu = document.querySelector('#menu');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
}