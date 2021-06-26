import '../../styles/Footer.css'
import '../../styles/Header.css'
import '../../styles/index.css'
import '../../styles/haveAQuestion.css'
import '../../styles/blog.css'

const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const menuCloseBtn = document.getElementById('mobile-menu-btn-close')
const mobileMenu = document.getElementById('mobile-menu')
const headerContacts = document.getElementById('header-contacts')

menuCloseBtn.addEventListener('click', toggleMenu)
mobileMenuBtn.addEventListener('click', toggleMenu)
function toggleMenu () {
  mobileMenu.classList.toggle('hidden')
  mobileMenuBtn.classList.toggle('hidden')
  menuCloseBtn.classList.toggle('hidden')
  headerContacts.classList.toggle('hidden')
}

const menuItems = mobileMenu.querySelectorAll('.menu-item')
menuItems.forEach((menuItem, index) => {
  if (menuItem.querySelectorAll('.menu-subfolder')) {
    menuItem.addEventListener('click', function () {
      menuItems.forEach((item, itemIndex) => {
        if (index !== itemIndex) {
          item.classList.add('hidden')
        }
      })
      menuItem.classList.toggle('hidden')
    })
  }
})

let navLinks = document.querySelectorAll('.page_item a')
let sections = document.querySelectorAll('subSection')
document.addEventListener('scroll', function () {
  let fromTop = window.scrollY + 123

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash)
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('current')
    } else {
      link.classList.remove('current')
    }
  })
})

navLinks.forEach(link => {
  let section = document.querySelector(link.hash)
  link.addEventListener('click', function (event) {
    const y = section.getBoundingClientRect().top + window.pageYOffset - 123
    window.scrollTo({ top: y, behavior: 'smooth' })
    event.preventDefault()
  })
})
