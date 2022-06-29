// function pyramid(par,depth) {
//     let res = ''
//     check = 0
//     full = 0
//     for (let i = 0; i <= depth; i++) {
//         check = depth - i + full
//         for (let j = 0; j < i; j++) {
//             //console.log(j)
//             console.log(check,res.length)
//             if (res.length < check) {
//                 res = res + '1'
//             } else if (res.length >=check){
//                 res = res + par
//             }
//             if (j == i-1 && i != depth) {
//                 res = res + '\n'
//             }
//             full = res.length 
//         }
//     }
//     return res
// }

// function pyramid(par,depth) {
//     let res = ''
//     for (let i = 0; i <= depth;i++) {
//         for (let j = (i-depth)*-1; j >= 0;j--) {
//             if (j-1 >= i) {
//                 res = res + '1'
//             } else if (j <= i+j) {
//                 res = res + par
//             }
//             if (j == 0) {
//                 res = res + '\n'
//             }
//         }
//     }
//     return res
// }

// function pyramid(par,depth) {
//     depth = depth + 4
//     let res = ''
//     for (let i = 0; i <= depth;i++) {
//         for (let j = (i+depth); j >=0; j-- ){
//             if (j < i+1 && (i+depth) % 2 != 0) {
//                 console.log(i+depth)
//                 res = res + par
//             }
//             // if (j > i+1) {
//             //     res = res + '1'
//             // }
//             if (j > i+1 &&(i+depth) % 2 != 0 ) {
//                 res = res + '1'
//             }
//             if (j == 0 && (i+depth) % 2 != 0) {
//                 res = res + '\n'
//             }
//         }
//     }
//     return res
// }

function pyramid(par,depth) {
    let res = ''
    let arr = []
    if (par.length == 1) {
        for (let i = 0; i < depth;i++) {
            for (let j = 1; j <=i+depth;j++) {
                if (j < depth-i) {
                    res = res + ' '
                } else {
                    res = res + par
                }
                //res = res + 1
                if (j == i+depth && i != depth-1) {
                    res = res + '\n'
                }
            }
        }
    }   
    if (par.length != 1) {
        arr.push(par)
        for (let i = 0; i < depth;i++) {
            for (let j = 1; j <=i+depth;j++) {
                let jojo = i
                if (j < depth-i) {
                    for (let k = 0; k < par.length;k++) {
                        res = res + ' '
                    }
                } else {
                    res = res + arr[0]
                }
                if (j == i+depth && i != depth-1) {
                    res = res + '\n'
                }
            }
        }
    }
    return res
}

console.log(pyramid('{123}',10))