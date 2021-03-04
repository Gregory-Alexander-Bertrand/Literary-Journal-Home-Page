const toggle = document.getElementById('toggle')
const nav = document.getElementById('navbar')
const logo = document.querySelector('.logo')

toggle.addEventListener('click', () => nav.classList.toggle('active'))
window.addEventListener('scroll', fixLogo)

function fixLogo() {
    if(window.scrollY > logo.offsetHeight + 150) {
        logo.classList.add('active')
    } else {
        logo.classList.remove('active')
    }
}

