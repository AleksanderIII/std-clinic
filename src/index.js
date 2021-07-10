import './styles/index.css'
import './styles/Header.css'
import './styles/Footer.css'
import './styles/Home.css'
import './styles/haveAQuestion.css'

export function toggleQuestion (event) {
  if (event.target.closest('li')) {
    const li = event.target.closest('li')
    const wasTheQuestionClosed = li?.classList.contains('hidden')

    if (wasTheQuestionClosed) {
      closeOtherQuestions(li)
    }
    li?.classList.toggle('hidden')
  }
}

function closeOtherQuestions (li) {
  const ul = li.parentNode
  ul.childNodes.forEach(childNode => {
    if (childNode.tagName === 'LI') {
      childNode?.classList.add('hidden')
    }
  })
}

const slider = document.getElementById('slider')
const slideritemsAmount = slider.querySelectorAll('.row').length
let currentItem = 0
let shift = 100
setInterval(() => {
  if (currentItem === slideritemsAmount - 1) {
    slider.style.transform = `translateX(0)`
    shift = 100
    currentItem = 0
  } else {
    slider.style.transform = `translateX(-${shift}%)`
    currentItem = currentItem + 1
    shift = shift + 100
  }
}, 5000)

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

const noInsuranceBtn = document.getElementById('no-insurance')
const popup = document.getElementById('popup')
const closeBtn = document.getElementById('close_btn')
noInsuranceBtn.addEventListener('click', openPopup)
closeBtn.addEventListener('click', closePopup)

function openPopup () {
  popup.classList.remove('hidden')
}

function closePopup () {
  popup.classList.add('hidden')
}

const seeMoreBtn = document.getElementById('see_more')
const seeMoreMobileBtn = document.getElementById('see_more_mobile')
const seeMorePopup = document.getElementById('see_more_popup')
const closeSeeMoreBtn = document.getElementById('see_more_close_btn')
seeMoreMobileBtn.addEventListener('click', openSeeMorePopup)
seeMoreBtn.addEventListener('click', openSeeMorePopup)
closeSeeMoreBtn.addEventListener('click', closeSeeMorePopup)

function openSeeMorePopup () {
  seeMorePopup.classList.remove('hidden')
}

function closeSeeMorePopup () {
  seeMorePopup.classList.add('hidden')
}
