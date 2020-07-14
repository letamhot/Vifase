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