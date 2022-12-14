function insertToMainSection(newNode) {
    const mainNode = document.getElementById('main')
    if (mainNode) {
        mainNode.parentNode.replaceChild(newNode, mainNode)
    } else {
        document.getElementById('content').appendChild(newNode)
    }
}

function prepareMainElement() {
    const main = document.createElement('main')
    main.classList.add('main')
    main.id = 'main'
    return main
}

export {
    insertToMainSection,
    prepareMainElement
}