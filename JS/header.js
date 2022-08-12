const header = document.querySelector('header')
const navA = document.querySelectorAll('.navegacao-item')
var windowWidth = window.innerWidth;
const windowTop = window.pageYOffset

function widthAtualizar() {
  let windowWidth = window.pageXOffset
  return
}
console.log(window)
function bgHeader() {
  const windowTop = window.pageYOffset
    if (windowTop > 10 && windowWidth > 1000) {
        header.classList.add('bg-branco')
        for (let i = 0; i < navA.length; i++) {
            var navItem = navA[i]
            navItem.style.color = "black"
        }
    } else if (windowTop < 10 && windowWidth > 1000) {
        header.classList.remove('bg-branco')
        for (let i = 0; i < navA.length; i++) {
            var navItem = navA[i]
            navItem.style.color = "white"
        }
    } else if (windowTop > 10 && windowWidth < 1000) {
      header.classList.add('bg-branco')
      hamburguer.style.color = "black"
    } else if (windowTop < 10 && windowWidth < 1000) {
      header.classList.remove('bg-branco')
      hamburguer.style.color = "white"
    }
}

window.addEventListener('scroll', bgHeader)
window.addEventListener('scroll', widthAtualizar)
// Efeito do Header
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

// Menu Responsivo

const btnMobile = document.querySelector('.btn-mobile')
const hamburguer = document.querySelector('.hamburguer')

function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active')
  const body = document.querySelector('body')
  body.classList.toggle('nav-active')
  if (body.classList.contains('nav-active')) {
    document.querySelector('header').style.background = "white"
    hamburguer.style.color = "black"
  } else {
    document.querySelector('header').style.background = ""
    if (windowTop > 10) {
      hamburguer.style.color = "black"
    } else {
      hamburguer.style.color = ""
    }
  }
}

btnMobile.addEventListener('click', toggleMenu)

// Ajustando body após usar o nav

const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const nav4 = document.querySelector('.nav4');
const body = document.querySelector('body')


function arrumarBody() {
  body.classList.remove('nav-active')
  const nav = document.querySelector('.nav')
  nav.classList.remove('active')
  document.querySelector('header').style.background = ""
}

nav1.addEventListener('click', arrumarBody)
nav2.addEventListener('click', arrumarBody)
nav3.addEventListener('click', arrumarBody)
nav4.addEventListener('click', arrumarBody)



