export default function insertToMainSection(newNode) {
    const mainNode = document.getElementById('main')
    if (mainNode) {
        mainNode.parentNode.replaceChild(newNode, mainNode)
    } else {
        document.getElementById('content').appendChild(newNode)
    }
}