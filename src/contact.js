import { insertToMainSection, prepareMainElement } from './utils.js'
import openingHoursIcon from '../PNG/contact/wall-clock.png'
import telephoneIcon from '../PNG/contact/telephone.png'
import emailIcon from '../PNG/contact/arroba.png'
import pinIcon from '../PNG/contact/placeholder.png'

export default function showContactUs() {
    insertToMainSection(prepareContactUsContents())
}

function prepareContactUsContents() {
    const main = prepareMainElement()
    main.classList.add('flex', 'justify-center')

    const contactContainer = document.createElement('div')
    contactContainer.id = 'contact-container'
    contactContainer.classList.add('flex', 'column', 'blur', 'container', 'center')

    const contactHeader = document.createElement('h1')
    contactHeader.textContent = 'Contact info'
    contactHeader.classList.add('section-header')
    contactContainer.appendChild(contactHeader)

    const openingHours = prepareContactInfoElement()
    appendIconToElement(openingHours, openingHoursIcon)
    appendInfoTextToElement(openingHours, 'Mon - Fri: 10AM - 10PM\nSat: 9AM - 10 PM\nSun: closed')
    contactContainer.appendChild(openingHours)

    const telephone = prepareContactInfoElement()
    appendIconToElement(telephone, telephoneIcon)
    appendInfoTextToElement(telephone, '(+11) 123-555-123')
    contactContainer.appendChild(telephone)

    const email = prepareContactInfoElement()
    appendIconToElement(email, emailIcon)
    appendInfoTextToElement(email, 'cat.cafe@gmail.com')
    contactContainer.appendChild(email)

    const address = prepareContactInfoElement()
    appendIconToElement(address, pinIcon)
    appendInfoTextToElement(address, '69 Lake Str, Hamburg, US')
    contactContainer.appendChild(address)

    const location = document.createElement('div')
    location.id = 'map'
    location.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="509" height="314" id="gmap_canvas" src="https://maps.google.com/maps?q=69%20Lake%20st,%20hamburg,%20US&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:314px;width:509px;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:314px;width:509px; }</style></div></div>'
    contactContainer.appendChild(location)

    main.appendChild(contactContainer)
    return main
}

function prepareContactInfoElement() {
    const element = document.createElement('div')
    element.classList.add('flex', 'contact-info')
    return element
}

function appendIconToElement(element, iconSrc) {
    const icon = new Image();
    icon.src = iconSrc
    icon.classList.add('icon')
    element.appendChild(icon)
}

function appendInfoTextToElement(element, text) {
    const paragraph = document.createElement('p')
    paragraph.textContent = text
    paragraph.style.whiteSpace = 'pre-line'
    element.appendChild(paragraph)
}