const header = document.querySelector('header')
const navA = document.querySelectorAll('.navegacao-item')

function bgHeader() {
    const windowTop = window.pageYOffset;
    if (windowTop > 10) {
        header.classList.add('bg-branco')
        for (let i = 0; i < navA.length; i++) {
            var navItem = navA[i]
            navItem.style.color = "black"
        }
        navAfter.style.color = "white"
    } else {
        header.classList.remove('bg-branco')
        for (let i = 0; i < navA.length; i++) {
            var navItem = navA[i]
            navItem.style.color = "white"
        }
        
    }
}

window.addEventListener('scroll', bgHeader)