function split(str,sep) {
    let res = []
    let substr = ''
    let checkstr = ''
    let ind = []
    let gg = ''
    for (let i = 0; i < str.length; i++) {
        checkstr = checkstr + str[i]
        if (checkstr.length == sep.length && checkstr == sep) {
            ind.push(i)
            i = i - (sep.length-1)
            checkstr = ''
        } else if (checkstr.length == sep.length && checkstr != sep) {
            i = i - (sep.length -1)
            checkstr = ''
        }
    }
    for (let i = 0; i <ind.length; i++) {
        substr = ''
        let j = 0
        let tr = ind[i]-(sep.length-1)
        if (i != 0) {
            j = ind[i-1]+1
        }
        for (; j < tr;j++ ) {
            substr = substr + str[j]
        }
        res.push(substr)
    }
    for (let i = ind[ind.length-1]+1; i < str.length;i++) {
        gg = gg + str[i]
    }
    res.push(gg)
    return res
}

function join(arr,sep) {
    if (sep == undefined) {
        sep = ','
    }
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            str = str + arr[i] 

        } else {
            str = str + sep + arr[i] 
        }
        // for (let j = 0; j <arr[i].length;j++) {
            
        // }
    }
    return str
}


const a = 'hello my frien hihi'

//console.log(split('a b c',' '))


// const b = ['2134','1222','2134']
// console.log(join(b,'-'))
