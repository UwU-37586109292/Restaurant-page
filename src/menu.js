import insertToMainSection from './utils.js'

export default function showMenu() {
    insertToMainSection(prepareMenuPageContent())
}

function prepareMenuPageContent() {
    const main = document.createElement('main')
    main.textContent = 'Menu'
    main.classList.add('main')
    main.id = 'main'

    return main
}