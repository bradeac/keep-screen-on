import NoSleep from 'nosleep.js'
const noSleep = new NoSleep()

let clicked = false

const button = document.getElementsByTagName('button')[0]
const paragraph = document.getElementsByTagName('p')[0]

document.getElementById('toggle').addEventListener('click', function () {
    if (!clicked) {
        clicked = !clicked

        button.innerHTML = 'Deactivate keep screen on'
        paragraph.innerHTML = 'Keep screen on status: activated !'

        noSleep.enable()
    } else {
        clicked = !clicked

        button.innerHTML = 'Activate keep screen on'
        paragraph.innerHTML = 'Keep screen on status: deactivated'

        noSleep.disable()
    }

})