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

function text_in() {
document.getElementById('text').style.height = "100%";
document.getElementById('text').style.transform = "scaleY(1)"; 
document.getElementById('button').innerHTML = "remove"
document.getElementById('button').onclick = function() {text_out()};
}

function text_out() {
document.getElementById('text').style.height = "0";
document.getElementById('text').style.transform = "scaleY(0)"; 
document.getElementById('button').innerHTML = "add"
document.getElementById('button').onclick = function() {text_in()};
document.getElementById("text").scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
}
