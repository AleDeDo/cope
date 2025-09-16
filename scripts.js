function menu_in() {
document.getElementById('menu-main').style.right = "0%"
}

function menu_out() {
document.getElementById('menu-main').style.right = "-100%"
}

function popup_in() {
document.getElementById('popup').style.transform = "scale(1)";
document.getElementById('video1').play() 
}

function popup_out() {
document.getElementById('popup').style.transform = "scale(0)"
document.getElementById('video1').pause();
document.getElementById('video1').currentTime = 0
}
