const imagensSlidePC = document.querySelectorAll('picture img')
const imagensSlideCel = document.querySelectorAll('picture source')
const imagensSlide = document.querySelectorAll('picture')
const modal = document.querySelector('.modal-bg')
const modalImg = document.querySelector('#modal-foto')
const modalFechar = document.querySelector('.modal-fechar')
let srcImg = ""

for(let i = 0; i < imagensSlide.length; i++) {
    imagensSlide[i].addEventListener('click' || 'touch', function(){
        if (window.innerWidth > 500) {
            srcImg = imagensSlidePC[i].getAttribute('src')
            console.log(srcImg)
            modalImg.setAttribute('src', srcImg);
            modal.classList.add('modal-active');
            body.classList.add('nav-active')
        } else {
            srcImg = imagensSlideCel[i].getAttribute('srcset');
            modalImg.setAttribute('src', srcImg);
            modal.classList.add('modal-active');
            body.classList.add('nav-active')
        }
    })
}

modalFechar.addEventListener('click', function() {
    modal.classList.remove('modal-active')
    body.classList.remove('nav-active')
})