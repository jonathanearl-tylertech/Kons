import './index.html'
import './main.scss'

import { toggleMobileNav, closeMobileNav } from './js/mobile-nav'

document.querySelector('.main-nav__mobile-button').onclick = toggleMobileNav

let mobileLinks = document.querySelectorAll('.mobile-nav__link')
for(let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].onclick = closeMobileNav
}
