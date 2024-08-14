let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');


function menus() {
    let Desplazamiento_Actual = window.scrollY;

    if(Desplazamiento_Actual <= 300) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
    }
}

window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    menus();
});