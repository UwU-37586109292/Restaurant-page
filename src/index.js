import './style.css'
import showHomePage from './home.js'
import showNavBar from './navigation.js'
import showFooter from './footer.js'

const contents = document.createElement('div')
contents.id = 'content'
contents.classList.add('flex', 'column')
document.body.appendChild(contents)

showNavBar()

showHomePage()

showFooter()