function get(src,path) {
    let gg = 0
    let obj = src
    let check = false
    let put = ''
    let full = ''
    for (let i = 0; i < path.length; i++) {
        put = put + path[i]
        if (path[i+1] == '.' && path[i+2]=='0') {
            gg = i+1+1
            full = put + '[0]'
            path = path.substring(gg+1)
            //console.log(path)
            full = full + path
            return eval('obj.'+full)
        }
        if (path[i] == '.') {
            gg = i
            check = true
            break
        }
    }
    if (check) {
        try {
            //console.log(1234)
        //path = path.substring(gg)
        path = 'obj.' + path
        // console.log(path)
        // console.log(obj)
        return eval(path)
        //return obj.nested.key
        } catch(err) {
            return undefined
        }
    }
    if (!check) {
        try {
            path = 'obj.' + path
            return eval(path)
        } catch(err) {
            return undefined
        }
    }
}

console.log(get({ nested: { key: 'value' } }, 'nested.key'))