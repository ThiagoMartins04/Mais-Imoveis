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
    } else {
        header.classList.remove('bg-branco')
        for (let i = 0; i < navA.length; i++) {
            var navItem = navA[i]
            navItem.style.color = "white"
        }
    }
}

window.addEventListener('scroll', bgHeader)

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-104px";
  }
  prevScrollpos = currentScrollPos;
}