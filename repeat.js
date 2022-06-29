
function repeat(word, num) {
    let res = ""
    let cheker = true
    while (cheker == true) {
        if (num == 0) {
            cheker = false
            break
        }
        res += word 
        num--
    }

    return res
} 

function cheker(){
    console.log(repeat("hello",5))
}
cheker()