function indexOf(arr,arg,ind) {
    if (ind == undefined) {
        ind = 0
    }
    for (let i = ind; i < arr.length;i++) {
        if (arr[i] == arg) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr,arg,ind) {
    if (ind == undefined) {
        ind = 0
    }
    let res = []
    let check = false
    for (let i = ind; i < arr.length;i++) {
        if (arr[i] == arg) {
            res.push(String(i))
            check = true
        }
    }
    for (let i = 0; i < ind-1; i++) {
        if (arr[i] == arg) {
            res.push(String(i))
            check = true
        }
    }

    if (!check) {
        return -1
    }
    res = res[res.length-1]
    return Number(res)
}

function includes(arr,arg) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arg) {
            return true
        }
    }
    return false
}

// //  console.log(lastIndexOf([0, 0, 1, 1], 1, 3))

// // const beasts = [0, 0, 1, 1];
// // if (beasts == undefined) {
// //     console.log(1)
// // }
// // // console.log(beasts)
//const bigArray = [...Array(999).keys(), ...Array(999).keys()]
// console.log(bigArray.lastIndexOf(4));

// // console.log(lastIndexOf([1, 0, 0, 1], 1, 2))

// console.log(lastIndexOf(bigArray,4))

//console.log(includes(bigArray, {}))