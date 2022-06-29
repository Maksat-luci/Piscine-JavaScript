//const animals = ['ant', 'bison', 'camel','duck', 'elephant'];
function slice(arg,begin,end) {
    if (begin ==undefined && end == undefined) {
        return arg
    }
    if (end == undefined) {
        end = arg.length
    }
    let res = []
    if (begin >= 0 && end > 0)  {
        for (let i = begin; i < end;i++) {
            if (arg.isArray) {
                res.push(arg[i])
            }
            if (typeof arg =='object') {
                res.push(arg[i])
            }
            if (typeof arg == 'string') {
                res = res + arg[i]
            }
        }
        return res
    }
    if (begin >= 0 && end < 0) {
        for (let i = begin; i < (arg.length+end);i++) {
            if (arg.isArray) {
                res.push(arg[i])
            }
            if (typeof arg =='object') {
                res.push(arg[i])
            }
            if (typeof arg == 'string') {
                res = res + arg[i]
            }
        }
        return res
    }
    if (begin < 0 && end < 0) {
        for (let i = (arg.length+begin); i < (arg.length+end);i++) {
            if (arg.isArray) {
                res.push(arg[i])
            }
            if (typeof arg =='object') {
                res.push(arg[i])
            }
            if (typeof arg == 'string') {
                res = res + arg[i]
            }
        }
        return res
    }

    if (begin < 0) {
        for (let i = arg.length-1; i >=0; i--) {
            //console.log(arg[i])
            if (arg.isArray) {
                res.unshift(arg[i])
            }
            if (typeof arg =='object') {
                res.unshift(arg[i])
            }
            if (typeof arg == 'string') {
                res = arg[i] + res
            }
            if (i == arg.length+begin) {
                return res
            }
            
        }
    }
    return []
}
// const str = 'The quick brown fox jumps over the lazy dog.';

 //console.log(slice([1, 2, 3, 4, 5, 6],2))
// console.log((str.slice(-5)));