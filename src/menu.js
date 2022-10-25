import { insertToMainSection, prepareMainElement } from './utils.js'

export default function showMenu() {
    insertToMainSection(prepareMenuPageContent())
}

function prepareMenuPageContent() {
    const main = prepareMainElement()
    main.textContent = 'Menu'

    main.appendChild(prepareMenuItem('Drip', 'Brewed with Hario V60 brewer has strong flavor and aroma. Great way to kick off your day!', 4))
    main.appendChild(prepareMenuItem('Aeropress', 'Coffee brewed using air pressure. Fine grained beans give the coffee special taste', 3))
    main.appendChild(prepareMenuItem('Chemex', 'Brewed using similar technique as drip, but due to larger filter area the coffee has more delicate flavour. Especially enjoyable in the afternoons', 5))

    main.appendChild(prepareMenuItem('Cupcake', 'We prepare batch of cupackes every day. Flavours vary depending on fresh ingredients at hand', 3.50))
    main.appendChild(prepareMenuItem('Tiramisu', 'Made according to nana\'s recipe.', 7.50))


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