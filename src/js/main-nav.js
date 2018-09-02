function deactivateLinks() {
    let links = document.querySelectorAll('.mobile_link')
    console.log(links)
    for(let i = 0; i < links.length; i++) {
        links[i].classList.remove('active')
    }
}

function selectMobileLink() {
    closeMobileNav()
    deactivateLinks()
}