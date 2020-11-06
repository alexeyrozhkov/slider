const imgWidth = 420;
const ul = document.querySelector('.inner-lists');
const buttonRight = document.querySelector(".right");
const buttonLeft = document.querySelector(".left");
const lis = document.querySelectorAll('.inner-list');
const SLIDES_TOTAL = lis.length;
const SLIDES_COUNT = 1;
const circles = document.querySelectorAll('.circle');
let currentIndex = 0;
circles[currentIndex].classList.add("selected");



buttonLeft.onclick = function() {
    const currentMarginLeft = parseInt(ul.style.marginLeft);
    buttonRight.removeAttribute("disabled", "disabled");
    buttonRight.classList.remove('disabled');
    if (currentMarginLeft >= 0) {
        buttonLeft.setAttribute("disabled", "disabled"); 
        buttonLeft.classList.add('disabled');
        return;
    }
    const circlesWrapper = document.querySelector(".arrow-circle");
    const selected = circlesWrapper.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    currentIndex--;
    ul.style.marginLeft = currentMarginLeft + imgWidth + 'px';
    circles[currentIndex].classList.add('selected');
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
    const circlesWrapper = document.querySelector(".arrow-circle");
    const selected = circlesWrapper.querySelector(".selected");
    
    if (selected) {
        selected.classList.remove("selected");
    }
    currentIndex++;
    ul.style.marginLeft = currentMarginLeft - imgWidth + 'px';
    circles[currentIndex].classList.add('selected');

}

for(let i=0; i< circles.length; i++) {
    circles[i].onclick = function() {
        ul.style.marginLeft = 0 - imgWidth * circles[i].dataset.number + "px";
        const circlesWrapper = document.querySelector(".arrow-circle");
        const selected = circlesWrapper.querySelector(".selected");
        
        if (selected) {
            selected.classList.remove("selected");
        }
        circles[i].classList.add('selected');
    }
}