import { insertToMainSection, prepareMainElement } from './utils.js'

export default function showMenu() {
    insertToMainSection(prepareMenuPageContent())
}

function prepareMenuPageContent() {
    const main = prepareMainElement()
    main.classList.add('flex', 'justify-center')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('flex', 'column', 'blur', 'container', 'center')

    const menuHeader = document.createElement('div')
    menuHeader.classList.add('section-header')
    menuHeader.textContent = 'Menu'
    menuContainer.appendChild(menuHeader)

    const beveragesHeader = document.createElement('div')
    beveragesHeader.classList.add('section-header-small')
    beveragesHeader.textContent = 'Beverages'
    menuContainer.appendChild(beveragesHeader)

    menuContainer.appendChild(prepareMenuItem('Drip', 'Brewed with Hario V60 brewer has strong flavor and aroma. Great way to kick off your day!', 4))
    menuContainer.appendChild(prepareMenuItem('Aeropress', 'Coffee brewed using air pressure. Fine grained beans give the coffee special taste', 3))
    menuContainer.appendChild(prepareMenuItem('Chemex', 'Brewed using similar technique as drip, but due to larger filter area the coffee has more delicate flavour. Especially enjoyable in the afternoons', 5))

    const cakesHeader = document.createElement('div')
    cakesHeader.classList.add('section-header-small')
    cakesHeader.textContent = 'Cakes'
    menuContainer.appendChild(cakesHeader)

    menuContainer.appendChild(prepareMenuItem('Cupcake', 'We prepare batch of cupackes every day. Flavours vary depending on fresh ingredients at hand', 3.50))
    menuContainer.appendChild(prepareMenuItem('Tiramisu', 'Made according to nana\'s recipe.', 7.50))

    main.appendChild(menuContainer)

    return main
}

function prepareMenuItem(name, description, price) {
    const menuItemWrapper = document.createElement('div')
    menuItemWrapper.classList.add('flex', 'column', 'menu-item')

    const nameDiv = document.createElement('div')
    nameDiv.classList.add('name')
    nameDiv.textContent = name

    const descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('description')
    descriptionDiv.textContent = description

    const priceDiv = document.createElement('div')
    priceDiv.classList.add('price')
    priceDiv.textContent = '$' + price

    menuItemWrapper.appendChild(nameDiv)
    menuItemWrapper.appendChild(descriptionDiv)
    menuItemWrapper.appendChild(priceDiv)

    return menuItemWrapper
}