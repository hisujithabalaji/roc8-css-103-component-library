var navList = document.querySelector(".main-nav");
var navBtnIcon = document.querySelector("#nav-btn i");

// navBtn.onclick = function navMenuToggle() {
//         navList.classList.toggle("nav-list-none");
//     }

function navToggle() {
    if (navBtnIcon.classList.contains("fa-bars")) {
        navBtnIcon.classList.add("fa-xmark");
        navBtnIcon.classList.remove("fa-bars");
    } else {
        navBtnIcon.classList.add("fa-bars");
        navBtnIcon.classList.remove("fa-xmark");
    }  
}