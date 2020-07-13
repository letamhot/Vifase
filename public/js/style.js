    window.onload = function() {
        let dropdown = document.querySelectorAll("#change-lang + .dropdown")[0];
        let flag = document.querySelectorAll('#change-lang img')[0];
        let name = document.querySelectorAll('#change-lang span')[0];
        let vi = document.querySelectorAll("#change-lang + .dropdown button")[0];
        let en = document.querySelectorAll("#change-lang + .dropdown button")[1];
        let change = document.getElementById("change-lang");
        change.onclick = function() {
            let display = dropdown.style.display;
            dropdown.style.display = display === "block" ? "none" : "block";
        }
        vi.onclick = function() {
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg";
            name.innerHTML = "Vietnam";
            dropdown.style.display = "none";
        }
        en.onclick = function() {
            flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/NYCS-bull-trans-B.svg/480px-NYCS-bull-trans-B.svg.png";
            name.innerHTML = "English";
            dropdown.style.display = "none";
        }
    }

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    function myFunction1() {
        document.getElementById("dropdown-con").classList.toggle("show");

    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.btn')) {
            var dropdowns = document.getElementsByClassName("dropdown-contact");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    function myFunction2() {
        document.getElementById("userDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.userbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-user");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

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