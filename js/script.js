"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".menu_open"),
          menu = document.querySelector(".header_menu");

    btn.addEventListener("click", e => {
        menu.classList.toggle("menu_active");
        btn.classList.toggle("menu_close");
    })
});