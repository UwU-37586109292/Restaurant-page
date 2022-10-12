import showHomePage from './home.js'
import showMenu from './menu.js'
import showContactUs from './contact.js'
import Icon from '../PNG/pet-love.png';


export default function showNavBar() {

    const mainContent = document.getElementById('content')

    const cafeName = document.createElement('div')
    cafeName.textContent = 'Cat Cafe'

    const cafeLogo = new Image();
    cafeLogo.src = Icon
    cafeLogo.alt = "cat-cafe-logo"

    const nameWrapper = document.createElement('div')
    nameWrapper.classList.add('flex', 'center')
    nameWrapper.appendChild(cafeLogo)
    nameWrapper.appendChild(cafeName)

    const header = document.createElement('header')
    const navList = document.createElement('ul')
    navList.classList.add('flex', 'center')

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

    header.appendChild(nameWrapper)
    header.appendChild(navList)
    header.classList.add('header')

    mainContent.appendChild(header)
}