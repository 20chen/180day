window.onload = setStyle;

window.onresize = setStyle;

//获取系统日期
function getDate() {
    var myDate = new Date();
    return myDate.getDay();
}

function dateRender(date,text) {
    var oDiv = document.getElementById(date);
    var actLeft = getElementLeft(oDiv);
    var oVertic = document.getElementById('gbak');
    var oHoriz = document.getElementById('g_horiz')
    oVertic.style.top = 0 + 'px';
    oVertic.style.left = actLeft + 'px';
    oVertic.innerText = date;
    oVertic.className += ' g_font';
    oHoriz.innerText = text;
    oHoriz.className += ' g_font';

}
// //设置样式
function setStyle() {
    var date1 = getDate();
    switch (date1) {
        case 0:
            dateRender('Sun','0');
            break;
        case 1:
            dateRender('Mon','1');
            break;
        case 2:
            dateRender('Tue','2');
            break;
        case 3:
            dateRender('Wed','Boom!Wednesday!');
            break;
        case 4:
            dateRender('Thu','4');
            break;
        case 5:
            dateRender('Fri','5');
            break;
        case 6:
            dateRender('Sat','6');
            break;
    }
}

//获取黄底的初始位置
function getElementLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }

    return actualLeft;
}