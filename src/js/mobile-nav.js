function toggleMobileNav() {
    let navList = document.querySelector('.mobile-nav')
    let isHidden = navList.style.display === ""
    if(isHidden) {
        navList.style.display = "flex"
    } else {
        navList.style.display = ""
    }
}

function closeMobileNav() {
    console.log('closemobile')
    let navList = document.querySelector('.mobile-nav')
    navList.style.display = ""
    return true;
}

module.exports = { toggleMobileNav, closeMobileNav }