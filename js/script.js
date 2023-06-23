'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.querySelector('#hamburger');
    const menu = document.querySelector('#menu');
    const liItem = document.querySelectorAll('.menu_item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    })

    liItem.forEach(el => {
        el.addEventListener('click', () => {
            hamburger.classList.toggle('amburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});