var effect = [
    'move_zoom 1s',
    'shake 1s',
    'swing 1s',
    'rot 1s',
    'zoom_out 1s',
    'move_rot 1s'
];



function ani(elemnt) {
    var index = parseInt(Math.random()*6);
    elemnt.style.animation = effect[index];
}