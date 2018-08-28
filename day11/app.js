

//展示
function setBg() {
    //获取系统时间
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var sec = myDate.getSeconds();
    var r = Math.round((hour/24)*256).toString(16);
    var g = Math.round((minute/60)*256).toString(16);
    var b = Math.round((sec/60)*256).toString(16);
    //设置背景颜色
    document.body.style.backgroundColor = '#' + r + g + b;
    //展示时间
    document.getElementById('clock').innerText = formate(hour) + ':' + formate(minute) + ':' + formate(sec);
    //展示色码值
    document.getElementById('color').innerText = formate(r) + formate(g) + formate(b);

}
//个位数加'0'
function formate(a){
    if(a < 10) a = '0' + a;
    return a;
}
//每隔1s调用一次
setInterval(setBg,1000);