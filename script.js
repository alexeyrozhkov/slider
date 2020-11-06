const imgWidth = 420;
const ul = document.querySelector('.inner-lists');
const buttonRight = document.querySelector(".right");
const buttonLeft = document.querySelector(".left");
const lis = document.querySelectorAll('.inner-list');
const SLIDES_TOTAL = lis.length;
const SLIDES_COUNT = 1;
const circles = document.querySelectorAll('.circle');

buttonLeft.onclick = function() {
    const currentMarginLeft = parseInt(ul.style.marginLeft);
    buttonRight.removeAttribute("disabled", "disabled");
    buttonRight.classList.remove('disabled');
    if (currentMarginLeft >= 0) {
        buttonLeft.setAttribute("disabled", "disabled"); 
        buttonLeft.classList.add('disabled');
        return;
    }
    
    ul.style.marginLeft = currentMarginLeft + imgWidth + 'px';
}
 
buttonRight.onclick = function() {
    const currentMarginLeft = parseInt(ul.style.marginLeft);
    buttonLeft.removeAttribute("disabled", "disabled");
    buttonLeft.classList.remove('disabled');
    if (currentMarginLeft <= (SLIDES_TOTAL - SLIDES_COUNT) * -420) {
        buttonRight.setAttribute("disabled", "disabled"); 
        buttonRight.classList.add('disabled');
       return;
    }
    ul.style.marginLeft = currentMarginLeft - imgWidth + 'px';
}