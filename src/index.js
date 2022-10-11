import './style.css'
import prepareHomeContents from './home.js'


prepareHomeContents().forEach(element => {
    document.getElementById('content').appendChild(element)
})