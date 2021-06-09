import '../../../styles/Footer.css'
import '../../../styles/Header.css'
import '../../../styles/Diseases.css'
import '../../../styles/index.css'
import '../../../styles/haveAQuestion.css'
import '../../../styles/treatment_algorithms.css'

const navigator = document.getElementById('navigator')
const navigation = document.getElementById('navigation')
navigator.addEventListener('click', toggleNavigator)

function toggleNavigator () {
  navigator.classList.toggle('closed')
  navigation.classList.toggle('closed')
}
