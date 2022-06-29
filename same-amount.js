function sameAmount(str,reg1,reg2) {
    let a = new RegExp(reg1, "g");
    let b = new RegExp(reg2, "g");
    let res1 = str.match(RegExp(a))
    let res2 = str.match(RegExp(b))
    if (res1 == null) {
        res1 = ''
    }
    if (res2 == null) {
        res2 = ''
    }
    let len1 = res1.length
    let len2 = res2.length
    if (len1 === len2) {
        return true
    } else {
        return false
    }
}
