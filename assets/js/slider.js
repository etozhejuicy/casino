var btn_prev = document.querySelector('.slider-navigation .prev-btn'),
    btn_next = document.querySelector('.slider-navigation .next-btn');

var images = document.querySelectorAll('.slidewrapper .slide');
var i = 0;
btn_prev.onclick = function () {
    images[i].className = "";
    i = i - 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].className = "shown";
};

btn_next.onclick = function () {
    images[i].className = "";
    i = i + 1; //i++
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = "shown";
};