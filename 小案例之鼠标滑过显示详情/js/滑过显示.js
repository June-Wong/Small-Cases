var slip1 = document.getElementById('slip_1');
var slip2 = document.getElementById('slip_2');
var detail1 = document.getElementById('detail_1');


var show = function () {
    detail1.style.visibility = "visible";
}
var unshow = function () {
    detail1.style.visibility = "hidden";
}
slip1.onmouseover = show;
detail1.onmouseover = show;
detail1.onmouseout = unshow;
slip1.onmouseout = unshow;