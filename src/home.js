import { insertToMainSection, prepareMainElement } from './utils.js'

export default function showHomePage() {
    insertToMainSection(prepareHomePageContent())
}

function prepareHomePageContent() {
    const main = prepareMainElement()
    const hero = document.createElement('div')
    hero.classList.add('hero', 'container')

    const name = document.createElement('h1')
    name.textContent = 'Catteine'
    hero.appendChild(name)

    const description = document.createElement('p')
    description.textContent = 'We are a small cat café, which means that while visiting us you are also visiting couple of our cats as well. Feel free to pet them and please be mindful of their comfort.'
    hero.appendChild(description)

    main.appendChild(hero)
    return main
}

// Photo by <a href="https://unsplash.com/@ricardol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ricardo L</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
