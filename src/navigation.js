import showHomePage from './home.js'
import showMenu from './menu.js'
import showContactUs from './contact.js'

export default function showNavBar() {
    const mainContent = document.getElementById('content')

    const header = document.createElement('header')
    const navList = document.createElement('ul')
    navList.classList.add('flex')

    const aboutUs = document.createElement('li')
    aboutUs.textContent = 'About us'
    aboutUs.onclick = showHomePage

    const menu = document.createElement('li')
    menu.textContent = 'Menu'
    menu.onclick = showMenu

    const contactUs = document.createElement('li')
    contactUs.textContent = 'Contact us'
    contactUs.onclick = showContactUs

    navList.appendChild(aboutUs)
    navList.appendChild(menu)
    navList.appendChild(contactUs)
    header.append(navList)
    header.classList.add('header')

    mainContent.appendChild(header)
}