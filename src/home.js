import { insertToMainSection, prepareMainElement } from './utils.js'

export default function showHomePage() {
    insertToMainSection(prepareHomePageContent())
}

function prepareHomePageContent() {
    const main = prepareMainElement()
    main.textContent = 'My awesome restaurant'

    return main
}