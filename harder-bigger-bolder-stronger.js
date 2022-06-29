export {generateLetters}
 
function generateLetters() {
    // let counter = 120
    // let intCicle = 0
    for (let intCicle = 1; intCicle <= 120;intCicle++) {
        let alphabet = "ABCDEFGHIGKLMNOPQRSTYWXYZ"
        let div = document.createElement("div")
        let random = Math.floor(Math.random() * alphabet.length)
        div.textContent = alphabet[random]
        let fontWeight = 300
        let Cicles = 120 / intCicle
        if (Cicles < 3) {
            fontWeight += 100
        }
        if (Cicles < 1.5) {
            fontWeight += 200
        }
        div.style.fontSize = `${intCicle + 10}px`
        div.style.fontWeight = fontWeight
        document.body.appendChild(div)
        // intCicle++
        // counter--
    }
}