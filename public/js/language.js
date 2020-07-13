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