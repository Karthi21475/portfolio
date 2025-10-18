var c = document.querySelector('#circle');
var r = document.querySelector('#circle-outline');
window.addEventListener("mousemove", function(p) {
    const posx = p.clientX;
    const posy = p.clientY;
    c.style.setProperty("--xaxis-", posx + "px");
    c.style.setProperty("--yaxis-", posy + "px");
    r.style.setProperty("--xaxis-", posx + "px");
    r.style.setProperty("--yaxis-", posy + "px");
})