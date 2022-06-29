function first(one) {
    return one[0]
}

function last(one) {
    let len = one.length
    return one[len-1]

}

function kiss(one) {
    let arr = [one[one.length-1], one[0]]
    return arr
}

console.log(kiss(["sdfsdsfdsf",2134231424213,2134231423,2314213412,243142123424,2222222222]))