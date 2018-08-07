function $js(id) {
    return document.getElementById(id);
}
//Category Navigation
jQuery(document).ready(function () {
    $(document).ready(function(){
        $("#catBtn").click(function(){
            $("#catUl").slideToggle("slow");
        });
    });
    var subMenu = jQuery("ul#catUl li ul li");
    var linkClick = jQuery("ul#catUl li").filter(":has(ul)");

    subMenu.hide();

    linkClick.click(function () {
        $(this).find('ul li').slideToggle("fast, 100");
    });
});
//Slider Start
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
setInterval(function () { showDivs(++slideIndex) }, 3000);
function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}
//Category Navigation
// $js("catBtn").addEventListener('click', function () {
//     var cList = $js("catUl").className.split(' ');
//     if (cList.indexOf("cat-nav-show") == -1) {
//         $js("catUl").classList.add("class", "cat-nav-show");
//     }
//     else {
//         $js("catUl").classList.remove("class", "cat-nav-show");
//     }
// });