import { insertToMainSection, prepareMainElement } from './utils.js'

export default function showContactUs() {
    insertToMainSection(prepareContactUsContents())
}

function prepareContactUsContents() {
    const main = prepareMainElement()
    main.textContent = 'Contact us!'

    return main
}