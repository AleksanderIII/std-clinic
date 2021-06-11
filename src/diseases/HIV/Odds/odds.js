import '../../../styles/Footer.css'
import '../../../styles/Header.css'
import '../../../styles/Diseases.css'
import '../../../styles/index.css'
import '../../../styles/haveAQuestion.css'
import '../../../styles/Odds.css'

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
