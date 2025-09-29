function menu_in() {
document.getElementById('menu-main').style.right = "0%";
}

function menu_out() {
document.getElementById('menu-main').style.right = "-100%";
}

function popup_text_in_1() {
document.getElementById('popup-text-1').style.transform = "scale(1)";
document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

function popup_text_out_1() {
document.getElementById('popup-text-1').style.transform = "scale(0)";
document.getElementsByTagName('body')[0].style.overflow = "auto";
}

function popup_text_in_2() {
document.getElementById('popup-text-2').style.transform = "scale(1)";
document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

function popup_text_out_2() {
document.getElementById('popup-text-2').style.transform = "scale(0)";
document.getElementsByTagName('body')[0].style.overflow = "auto";
}

function popup_video_in_1() {
document.getElementById('popup-video-1').style.transform = "scale(1)";
document.getElementsByTagName('body')[0].style.overflow = "hidden";
document.getElementById('video-1').play(); 
}

function popup_video_out_1() {
document.getElementById('popup-video-1').style.transform = "scale(0)";
document.getElementsByTagName('body')[0].style.overflow = "auto";
document.getElementById('video-1').pause();
document.getElementById('video-1').currentTime = 0;
}
