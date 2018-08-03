var boxsdInt = 2;
var txtsdInt = 2;
function boxShadow(elemnt) {
    boxsdInt += 2;
    elemnt.style.boxShadow = '0px 0px 10px ' + boxsdInt + 'px' + ' #888888';
}

function textShadow(elemnt) {
    txtsdInt += 2;
    elemnt.style.textShadow = '0px ' + txtsdInt + 'px ' + txtsdInt + 'px' + '#000000';
}