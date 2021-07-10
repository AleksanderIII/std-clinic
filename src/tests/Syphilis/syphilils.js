import '../../styles/Header.css'
import '../../styles/Footer.css'
import '../../styles/tests.css'
import '../../styles/haveAQuestion.css'

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
