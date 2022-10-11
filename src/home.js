export default function prepareHomeContents() {
    const header = document.createElement('header')
    header.textContent = 'About us'
    header.classList.add('header')

    const main = document.createElement('main')
    main.textContent = 'My awesome restaurant'
    main.classList.add('main')

    const footer = document.createElement('footer')
    footer.textContent = 'Created by Zuzka'
    footer.classList.add('footer')

    return [header, main, footer]
}