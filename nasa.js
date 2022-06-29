function nasa(N) {
    let res = ''
    for (let i = 1; i <= N; i++) {
        if (i%3 == 0 && i%5 == 0) {
            res = res + ' ' + 'NASA'
        } else if (i%3 == 0) {
            res = res + ' ' + 'NA'
        } else if (i%5 == 0) {
            res = res + ' ' + 'SA'
        } else if (i == 1) {
            res = res + String(i)
        } else {
            res = res + ' ' + String(i)
        }
    }
    return res
}

console.log(nasa(15))