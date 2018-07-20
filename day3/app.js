function bgcChange() {
        var r = Math.ceil(Math.random() * 255);
        var g = Math.ceil(Math.random() * 255);
        var b = Math.ceil(Math.random() * 255);
        var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
        document.getElementsByTagName("body")[0].style.background = color;
}

// window.onload = bgcChange();
