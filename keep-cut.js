// kak dela ept

function cutFirst(str) {
    str = String(str).substring(2)
    return str
}

function cutLast(str) {
    let res = ''
    for (let i = 0; i < (str.length-2); i++) {
        res = res + str[i]
    }
    return res
}

function cutFirstLast(str) {
    let res = ''
    for (let i = 0; i < (str.length-2); i++) {
        res = res + str[i]
    }
    return String(res).substring(2)
}

function keepFirst(str) {
    if (str.length < 2) {
        return str
    }
    let res = ''
    for (let i = 0; i < 2;i++) {
        res = res + str[i]
    }
    return res
}

function keepLast(str) {
    if (str.length < 2) {
        return str
    }
    return String(str).substring(str.length-2)
}

function keepFirstLast(str) {
    if (str.length < 4) {
        return str
    }
    let res = ''
    for (let i = 0; i < 2;i++) {
        res = res + str[i]
    }
    return res + String(str).substring(str.length-2)
}

//console.log(keepFirstLast('af'))