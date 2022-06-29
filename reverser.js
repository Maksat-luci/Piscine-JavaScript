function reverse (arg) {
    let str = ''
    let arr = []
    if (!(typeof arg == 'string')) {
        for (let i = arg.length-1; i >= 0;i--) {
            arr.push(arg[i])
        }
        return arr
    } else {
        for (let i = arg.length-1; i >= 0; i--) {
            str = str + arg[i]
        }
        return String(str)
    }
}
// const a = [1,2,3,4,5]
// const b = ['1','2','3']
// const c = ' 123456 '
// console.log(reverse(c))
// console.log(b.reverse)

