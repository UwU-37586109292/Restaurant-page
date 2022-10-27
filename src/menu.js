import { insertToMainSection, prepareMainElement } from './utils.js'
import DripImage from '../PNG/menu_items/drip.jpg'
import AeropressImage from '../PNG/menu_items/aeropress.jpg'
import ChemexImage from '../PNG/menu_items/chemex.jpg'
import CupacakeImage from '../PNG/menu_items/cupcake.jpg'
import TiramisuImage from '../PNG/menu_items/tiramisu.jpg'

export default function showMenu() {
    insertToMainSection(prepareMenuPageContent())
}

function prepareMenuPageContent() {
    const menuImagesSrc = '../PNG/menu_items/'
    const main = prepareMainElement()
    main.classList.add('flex', 'justify-center')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('flex', 'column', 'blur', 'container', 'center')

    const menuHeader = document.createElement('h1')
    menuHeader.classList.add('section-header')
    menuHeader.textContent = '🐾 Menu 🐾'
    menuContainer.appendChild(menuHeader)

    const beveragesHeader = document.createElement('h2')
    beveragesHeader.classList.add('section-header-small')
    beveragesHeader.textContent = 'Beverages'
    menuContainer.appendChild(beveragesHeader)

    menuContainer.appendChild(prepareMenuItem('Drip', 'Brewed with Hario V60 brewer has strong flavor and aroma. Great way to kick off your day', 4, DripImage))
    menuContainer.appendChild(prepareMenuItem('Aeropress', 'Coffee brewed using air pressure. Fine grained beans give the coffee special taste', 3, AeropressImage))
    menuContainer.appendChild(prepareMenuItem('Chemex', 'Brewed using similar technique as drip, but due to larger filter area the coffee has more delicate flavour. Especially enjoyable in the afternoons', 5, ChemexImage))

    const cakesHeader = document.createElement('h2')
    cakesHeader.classList.add('section-header-small')
    cakesHeader.textContent = 'Cakes'
    menuContainer.appendChild(cakesHeader)

    menuContainer.appendChild(prepareMenuItem('Cupcake', 'We prepare batch of cupackes every day. Flavours vary depending on fresh ingredients at hand', 3.50, CupacakeImage))
    menuContainer.appendChild(prepareMenuItem('Tiramisu', 'Made according to Nana\'s recipe', 7.50, TiramisuImage))

    main.appendChild(menuContainer)

    return main
}

function prepareMenuItem(name, description, price, imageSrc) {
    const menuItemWrapper = document.createElement('div')
    menuItemWrapper.classList.add('flex', 'menu-item')

    const image = new Image();
    image.src = imageSrc
    image.classList.add('menu-image')
    const cropper = document.createElement('div')
    cropper.classList.add('crop')
    cropper.appendChild(image)
    menuItemWrapper.appendChild(cropper)

    const menuItemText = document.createElement('div')
    menuItemText.classList.add('flex', 'column', 'start')

    const nameDiv = document.createElement('div')
    nameDiv.classList.add('name')
    nameDiv.textContent = name

    const descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('description')
    descriptionDiv.textContent = description

    const priceDiv = document.createElement('div')
    priceDiv.classList.add('price')
    priceDiv.textContent = '$' + price

    menuItemText.appendChild(nameDiv)
    menuItemText.appendChild(descriptionDiv)
    menuItemText.appendChild(priceDiv)

    menuItemWrapper.appendChild(menuItemText)

    return menuItemWrapper
}