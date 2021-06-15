import './styles/Header.css'
import './styles/Footer.css'
import './styles/Home.css'
import './styles/index.css'

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
