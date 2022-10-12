import insertToMainSection from './utils.js'

export default function showHomePage() {
    insertToMainSection(prepareHomePageContent())
}

function prepareHomePageContent() {
    const main = document.createElement('main')
    main.textContent = 'My awesome restaurant'
    main.classList.add('main')
    main.id = 'main'

    return main
}