import { insertToMainSection, prepareMainElement } from './utils.js'

export default function showMenu() {
    insertToMainSection(prepareMenuPageContent())
}

function prepareMenuPageContent() {
    const main = prepareMainElement()
    main.textContent = 'Menu'

    return main
}