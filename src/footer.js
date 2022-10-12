import Icon from '../PNG/icon.png';

export default function showFooter() {
    const footer = document.createElement('footer')
    footer.textContent = 'Created by Zuzka'
    footer.classList.add('footer', 'flex', 'center')

    const githubLink = document.createElement('a')
    githubLink.href = "https://github.com/UwU-37586109292"

    const githubIcon = new Image();
    githubIcon.src = Icon;
    githubIcon.alt = "github-user-link"

    githubLink.appendChild(githubIcon)
    footer.appendChild(githubLink)

    const mainContent = document.getElementById('content')
    mainContent.appendChild(footer)
}