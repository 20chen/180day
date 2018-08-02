
function inBox(elemnt) {
    var r = Math.ceil(Math.random() * 255);
    var g = Math.ceil(Math.random() * 255);
    var b = Math.ceil(Math.random() * 255);
    var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    elemnt.style.background = color;
    elemnt.style.boxShadow = "0px 0px 10px white";
    elemnt.style.zIndex = '999';
}

function outBox(elemnt) {
    elemnt.style.boxShadow = "0px 0px 0px";
    elemnt.style.zIndex = '0';
}


