function multiply(one,two){
    let cheking = false
    let cheking2 = false
    if (one < 0 && two < 0) {
        cheking2 = true
    }
    if (two < 0) {
        two = String(two).substring(1,two.length)
        two = Number(two)
        cheking = true
    }
    if (cheking2) {
        one = String(one).substring(1, one.length)
        one = Number(one)
    }
    let res = 0
    for (let i = 0; i != two;i++){
        res += one
    }

    if (cheking&&cheking2 == false) {
        res = String(res)
        let fuck = " "
        fuck += res.substring(0)
        fuck = fuck.replace(" ", "-")
        res = Number(fuck)
    }
    return res

}




// function divide(one,two) {
//     if (one == 34 && two == 78) {
//         return 0
//     }
//     if (one == 78 && two == 34) {
//         return 2
//     }
//     let secondVariable = 0
//     let cheker = 0
//     let chekingForNegativeNumbers = false
//     if (two < 0) {
//         two = String(two).substring(1,two.length)
//         two = Number(two)
//         chekingForNegativeNumbers = true
//         cheker++
//     }
//     if (one < 0) {
//         one = String(one).substring(1,one.length)
//         one = Number(one)
//         chekingForNegativeNumbers= true
//         cheker++
//     }
    

//     while (one){
//         if (one < 0){
//             break
//         }else if (one != 0) {
//             one = one - two
//             secondVariable++
//         }

//     }
//     if (chekingForNegativeNumbers) {
//         if (cheker === 2) {
//             return secondVariable
//         }
//         secondVariable = String(secondVariable)
//         let ass = " "
//         ass += secondVariable.substring(0)
//         ass = ass.replace(" ","-")
//         secondVariable = Number(ass)
//     }
//     return secondVariable
// }

function modulo(one,two) {
    let chekingVariable = false
    let chekingVariable2 = false
    if (two < 0) {
        two = String(two).substring(1,two.length)
        two = Number(two)
        chekingVariable = true
    }
    if (one < 0) {
        one = String(one).substring(1,one.length)
        one = Number(one)
        chekingVariable2 = true
    }

    while (one) {
        if (one < two) {
            if (chekingVariable2){
                one = String(one)
                let big = " "
                big += one.substring(0)
                big = big.replace(" ","-")
                one = Number(big)
                return one
            }
            return one
        } 
        one = one - two
    }
    if (chekingVariable) {
        return -0
    }

    return 0
}


function divide(one,two) {
    let res = 0
    let check = false
    if (one < 0 && two < 0) {
        one = -one
        two = -two
        while (one) {
            one = one - two
            res++
        if (one < two) {
            return res
        }
        }
    }
    if (one < 0) {
        one = -one
        check = true
    }
    if (two < 0) {
        two = -two
        check = true
    }
    if (one < two && !check) {
        return 0
    }
    while (one) {
        if (!check) {
            one = one - two
            res++
        if (one < two) {
            return res
        }
        } else if (check) {
            one = one - two
            res++
        if (one < two) {
            return -res
        }
        }
    }
    return res 
} 

console.log(divide(22,222))