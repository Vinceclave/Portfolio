// mobile navigation toggle
const toggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('nav')
const navToggleTitle = document.querySelector('[aria-label="menu"')

const menuList = document.querySelectorAll('.menu-list')
console.log(menuList)


toggle.addEventListener('click', () => {
    toggle.classList.toggle('xmark')
    nav.classList.toggle('nav-toggled')
    document.body.classList.toggle('body-locked')
    document.querySelector('.blur').classList.toggle('body-wrapper')
    if ((navToggleTitle.getAttribute('aria-label') === 'menu')) {
                navToggleTitle.setAttribute('aria-label', 'close')
                navToggleTitle.innerHTML = 'close'
                navToggleTitle.style.color = 'var(--white)'
        } else {
                navToggleTitle.setAttribute('aria-label', 'menu')
                navToggleTitle.innerHTML = 'menu'
                navToggleTitle.style.color = 'var(--dark-black)'
                console.log('false')
        }
})

window.addEventListener('resize', e => {
        if(window.innerWidth >= 768) {
           toggle.classList.remove('xmark')
           nav.classList.remove('nav-toggled')     
           document.body.classList.remove('body-locked')
           document.querySelector('.blur').classList.remove('body-wrapper')
        }
})



window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    document.querySelector('.header-title > img')
    .setAttribute('src', './src/images/header-logo-2.png')
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
    document.querySelector('.header-title > img')
    .setAttribute('src', './src/images/header-logo.png')
  }

  if(window.scrollY > 500) {
    document.querySelector('.back-to-top').classList.add('active')
  } else {
    document.querySelector('.back-to-top').classList.remove('active')
  }
});





window.addEventListener('')