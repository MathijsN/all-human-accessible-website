const hamburgerBtn = document.querySelector("header nav img:nth-of-type(2)")
const header = document.querySelector("header")

function toggleNav() {
    header.classList.toggle('open')
}

hamburgerBtn.addEventListener('click', toggleNav)