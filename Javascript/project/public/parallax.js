let text = document.getElementById('text');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    if(value < 1100)
    text.style.marginTop = value * 2.5 + "px";
})