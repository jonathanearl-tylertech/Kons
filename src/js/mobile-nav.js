function openMobileNav() {
    let navList = document.querySelector('.mobile-nav')
    let isHidden = navList.style.display === ""
    if(isHidden) {
        navList.style.display = "flex"
    } else {
        navList.style.display = ""
    }
    console.log('hello')
    console.log(navList)
    console.log(navList.style)
}

module.exports = openMobileNav