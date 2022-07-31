const header = document.querySelector('header')

function bgHeader() {
    const windowTop = window.pageYOffset;
    if (windowTop > 10) {
        header.classList.add('bg-preto')
    } else {
        header.classList.remove('bg-preto')
    }
}

window.addEventListener('scroll', bgHeader)