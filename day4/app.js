/**
 * @return {string}
 */

//获取颜色
var color = 'white' ;

function getColor(elemnt) {
        // color = rgb(0,0,0);
        color = window.getComputedStyle(elemnt,null).getPropertyValue("background-color");
}


//设置颜色
function SetColor(elmnt) {
    elmnt.style.backgroundColor = color;
}