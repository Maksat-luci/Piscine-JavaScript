let prons = ['i', 'you', 'he', 'she', 'it', 'we', 'they']

const pronoun = (str = '') => {
    let words = str.replace(/,/gm, ' ').split(/\s/gm)
    let res = { }
    words.forEach((v, i) => {
        let next = words[i+1]
        v = v.toLowerCase()
        if (prons.includes(v)) {
            if (res[v] === undefined) {
                res[v] = { word: [], count: 0 }
            }

            if (!prons.includes(next) && next != undefined) {
                res[v].word.push(next)
            }

            res[v].count++
        }
    })
    return res
}
