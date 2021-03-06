import '../../../styles/Footer.css'
import '../../../styles/Header.css'
import '../../../styles/Diseases.css'
import '../../../styles/haveAQuestion.css'
import '../../../styles/treatment_algorithms.css'

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
