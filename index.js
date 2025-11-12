var c = document.querySelector('#circle');
var r = document.querySelector('#d-circle');
var u = document.querySelector('#ufo');
window.addEventListener("mousemove", function(p) {
    const posx = p.clientX;
    const posy = p.clientY;
    c.style.setProperty("--xaxis-", posx + "px");
    c.style.setProperty("--yaxis-", posy + "px");
    r.style.setProperty("--xaxis-", posx + "px");
    r.style.setProperty("--yaxis-", posy + "px");
    u.style.setProperty("--xaxis-", posx + "px");
    u.style.setProperty("--yaxis-", posy + "px");
})