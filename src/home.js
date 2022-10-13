import { insertToMainSection, prepareMainElement } from './utils.js'

export default function showHomePage() {
    insertToMainSection(prepareHomePageContent())
}

function prepareHomePageContent() {
    const main = prepareMainElement()
    const hero = document.createElement('div')
    hero.classList.add('hero')
    hero.textContent = 'We love cats, we love caffeine. Add some love and you\'ve got Catteine! Come over, get your favourite brew and pet some fluffy friends'
    main.appendChild(hero)
    return main
}

// Photo by <a href="https://unsplash.com/@ricardol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ricardo L</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
