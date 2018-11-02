import './index.html'
import './main.scss'

import { toggleMobileNav, closeMobileNav } from './js/mobile-nav'
import selectLink from './js/main-nav'

document.querySelector('.main-nav__mobile-button').onclick = toggleMobileNav

let mobileLinks = document.querySelectorAll('.mobile-nav__link')
for(let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].onclick = closeMobileNav
}

let mainLinks = document.querySelectorAll('.main-nav__link')
for(let i = 0; i < mobileLinks.length; i++) {
    mainLinks[i].onclick = selectLink
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});