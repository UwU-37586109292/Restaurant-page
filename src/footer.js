export default function showFooter() {
    const footer = document.createElement('footer')
    footer.textContent = 'Created by Zuzka'
    footer.classList.add('footer')

    const mainContent = document.getElementById('content')
    mainContent.appendChild(footer)
}