function longWords(array) {
    return array.every(elem => elem.length >5)

}


function oneLongWord(array) {
    return array.some(function(elem){
        if (elem.length > 10){
            return true
        }
    })
}

function noLongWords(array) {
    return !array.every(function(elem){
        if (elem.length >= 7){
            return false
        }
    })
}
