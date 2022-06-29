function triangle(par,depth) {
    let res = ''
    for (let i = 0; i <= depth; i++) {
        for (let j = 0; j < i; j++) {
            res = res + par
            if (j == i-1 && i != depth) {
                res = res + '\n'
            }
        }
    }
    return res
}

// console.log(triangle('*',5))