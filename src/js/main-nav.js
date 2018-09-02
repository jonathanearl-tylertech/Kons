function deactivateLinks() {
    console.log('deactivateLinks')
    let links = document.querySelectorAll('.main-nav__link')
    console.log(links)
    for(let i = 0; i < links.length; i++) {
        links[i].classList.remove('main-nav__link--active')
    }
}

function selectLink() {
    console.log('selectLink')
    deactivateLinks()
    console.log(this.classList)
    this.classList.add('main-nav__link--active')
}

module.exports = selectLink