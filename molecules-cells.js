function RNA(DNA) {
    let res = ''
    for (let i = 0; i < DNA.length;i++) {
        if (DNA[i] == 'G'){
            res = res + 'C'
        } else if (DNA[i] == 'C') {
            res = res + 'G'
        } else if (DNA[i] == 'T') {
            res = res + 'A'
        } else if (DNA[i] == 'A') {
            res = res + 'U'
        }
    }
    return res
}

function DNA(RNA) {
    let res = ''
    for (let i = 0; i < RNA.length;i++) {
         if (RNA[i] == 'C') {
             res = res + 'G'
         } else if (RNA[i] == 'G') {
             res = res + 'C'
         } else if (RNA[i] == 'A') {
             res = res + 'T'
         } else if (RNA[i] == 'U') {
             res = res + 'A'
         }
    }
    return res
}
