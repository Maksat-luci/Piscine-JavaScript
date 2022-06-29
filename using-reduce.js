function adder(arr, integer) {
    if (integer == 0 && arr.length == 0) {
        return 0
    }
    let cheker = false
    if (integer > 0) {
        cheker = true
    }
    let res = arr.reduce(function(sum, current) {
        return sum + current
    }, 0)
    if (cheker) {
        res += integer
    }
    return res
}

// 29, 23, 3, 2, 25
function sumOrMul(arr, extra) {
    if (extra == undefined) {
        extra = 0
    }
    return arr.reduce((prev, cur) => evenOrOdd(prev, cur), extra)

}

const evenOrOdd = (a, b) => {
    if (b % 2 === 0) {
        return b * a
    }
    return a + b
}


const funcExec = (array, n) =>
    array.reduce((accumulator, currentValue) => currentValue(accumulator), n)