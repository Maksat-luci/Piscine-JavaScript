function flat (arr, depth){
    if (depth == undefined){
        depth = 1
    }
    let res = []
    for (let i = 0;i < arr.length;i++){
        if (!Array.isArray(arr[i])){
            res.push(arr[i])
        }else {
            if (depth > 0){
            let n = (flat(arr[i], depth-1))
            for (let j = 0; j < n.length;j++){
                res.push(n[j])
            }
            }else {
                res.push(arr[i])
            }
        }
    }
    return res
}