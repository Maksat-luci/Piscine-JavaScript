function chunk(arr,chunk) {
    let res = []
    let sub = []
    for (let i = 0; i < arr.length;i++) {
        sub.push(arr[i])
        if (sub.length == chunk) {
            res.push(sub)
            sub = []
        } else if ( i == arr.length-1 && sub.length < chunk) {
            res.push(sub)
            sub = []
        }
    }
    return res
}

// console.log(chunk(inputArray,10))