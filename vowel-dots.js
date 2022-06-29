const vowels = /[A E I O U a e i o u]/g

function vowelDots(str) {
    let res = ''
    for (let i = 0; i < str.length;i++) {
        //console.log(vowels.test(str[i]))
        if (vowels.test(str[i])) {
            //console.log(1)
            res = res + str[i] + '.'
        } else {
            res = res + str[i]
        }      
    }
    //return str.replace(vowels, str+".")
    return res
}
