import '../../../styles/Footer.css'
import '../../../styles/Header.css'
import '../../../styles/Diseases.css'
import '../../../styles/index.css'
import '../../../styles/haveAQuestion.css'
import '../../../styles/WhatISee.css'

function toggleQuestion (event) {
  if (event.target.closest('li')) {
    const li = event.target.closest('li')
    const wasTheQuestionClosed = li?.classList.contains('hidden')

    if (wasTheQuestionClosed) {
      closeOtherQuestions(li)
      const coords = li.getBoundingClientRect()
      window.scrollTo({
        top: window.pageYOffset + coords.top - 150,
        behavior: 'smooth'
      })
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

const FAQ = document.getElementsByClassName('FAQ-content')[0]
const ul = FAQ?.getElementsByTagName('ul')[0]
if (ul) {
  ul.addEventListener('click', event => toggleQuestion(event))
}

const navigator = document.getElementById('navigator')
const navigation = document.getElementById('navigation')
navigator.addEventListener('click', toggleNavigator)

function toggleNavigator () {
  navigator.classList.toggle('closed')
  navigation.classList.toggle('closed')
}


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
