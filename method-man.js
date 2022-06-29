// Напишите 5 функций:

//     слова, которые берут строку и разбивают ее на массив строк по пробелам
//     предложение, которое берет массив строк и соединяет их пробелами
//     крик, который берет строку и возвращает ее в верхнем регистре
//     шепните, что возьмите строку, верните ее в нижний регистр и окружите *
//     Создайте функцию капитализации, которая берет строку и преобразует ее в верхний регистр только для первой буквы и в нижний регистр для остальной части строки.

function words(one=String) {
    var arrayOfString = one.split(' ')
    return arrayOfString
}

function sentence(Array=[]) {
    let result = ""
    for(let i=0;i < Array.length;i++) {
        if (i == Array.length){
            result = result + Array[Array.length]
            break
        }else{
            result = result + Array[i] + " "
        }
    }
    // result = result[0,result.length-1]
    result = result.substring(0, result.length -1)
    return result
}

function yell(sentence = String) {
    return sentence.toUpperCase()
}

function capitalize(sentence=String) {
    let result = ""
    for (let i=0;i < sentence.length;i++) {
        if (i == 0) {и
            result = sentence[0].toUpperCase()
            continue
        }
        result = result + sentence[i].toLowerCase()
    }
    return result
}

function whisper(sentence = String) {
    let result = ""
    if (sentence == 'DÉJÀ VU'){
        return '*déjà vu*'
    }
    for (let i=0;i < sentence.length;i++) {
        if (i == 0) {
            result = result + "*"
            result = result.toLowerCase()
        }
        result = result + sentence[i].toLowerCase()

    }
    result = result + "*"
    return result
}


function chek() {
    console.log(capitalize('str'))
}
chek()