function letterSpaceNumber(str) {
    var reg = /[A-Za-z] [0-9](?!\w)/g;
    let res = str.match(reg)
    if (res == null) {
        return []
    }
    return res
}
//  chek 