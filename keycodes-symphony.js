export {compose}

function compose() {
    document.addEventListener('keydown', event => {
        if ((/^([a-z]| )$/).test(event.key)) {
            let div = document.createElement('div')
            let color = (event.keyCode - 65) * 9
            div.className = 'note'
            div.textContent = event.key
            div.style.background = `rgb(${color}, ${color}, ${color})`
            document.body.appendChild(div)
        }else if (event.key === 'Backspace') {
            document.body.lastChild.remove()
        }else if (event.key === 'Escape') {
            document.body.textContent = ''
        }
    })
}