var time = 1.3;
var count = 0;

function bouce() {
    ++count;
    time -= 0.1;
    switch (count){
        case 1:
            toNextLever('1');
            break;
        case 2:
            toNextLever('2');
            break;
        case 3:
            toNextLever('3');
            break;
        case 4:
            toNextLever('4');
            break;
        case 5:
            toNextLever('5');
            break;
        case 6:
            toNextLever('6');
            break;
        case 7:
            toNextLever('7');
            break;
        case 8:
            toNextLever('8');
            break;
        case 9:
            toNextLever('9');
            break;
        case 10:
            toNextLever('10');
            break;
        case 11:
            toNextLever('11');
            break;
        case 12:
            toNextLever('12');
            break;
        case 13:
            count = 0;
            time = 1.3;
            document.getElementById('circle').style.display = 'none';
            var oText = document.getElementsByClassName('third-part');
            oText[0].style.display = 'block';
            oText[0].innerText = '';
            var para = document.createElement('a');
            document.getElementsByClassName('third-part')[0].appendChild(para);
            var node = document.createTextNode('13');
            para.appendChild(node);
            para.href = './index.html';
            break;
    }


}


function circlePlay() {
    var oText = document.getElementsByClassName('third-part');
    oText[0].style.display = 'none';
    var oCircle = document.getElementById('circle');
    oCircle.style.display = 'flex';
    oCircle.style.animation = 'bouncing ' + time + 's ' + 'cubic-bezier(.47,.08,.87,.51)';
    oCircle.style.animationDirection = 'alternate';
    oCircle.style.animationIterationCount = 'infinite';
}


function toNextLever(content) {
    document.getElementById('circle').style.display = 'none';
    var oText = document.getElementsByClassName('third-part');
    oText[0].style.display = 'block';
    oText[0].innerText = content;
    setTimeout('circlePlay()',2000);
}
