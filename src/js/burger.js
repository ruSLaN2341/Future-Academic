function addClass(){
    var hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle('hamburger_active')

    var menu = document.getElementById("menu");
    menu.classList.toggle('menu_active')

    var body = document.getElementById("body");
    body.classList.toggle('body_active')
}