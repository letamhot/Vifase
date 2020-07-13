//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onload = function() {
    let img = document.getElementById("myImage");
    let ul = document.getElementById("list-menu");
    img.onclick = function() {
        let nameImg = this.src.split('-');
        if (nameImg[nameImg.length - 1] == "hamburger.svg") {
            this.src = "./public/image/icon-close.svg";
            ul.style.display = "flex";
        } else {
            this.src = "./public/image/icon-hamburger.svg";
            ul.style.display = "none"
        }
    }
}