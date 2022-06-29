function deepCopy(objOrArr){
    if (Array.isArray(objOrArr)){
        let res = []
        res = Array.from(objOrArr)
        for (let i=0;i < res.length;i++){
            if (Array.isArray(res[i])){
                res[i] = deepCopy(res[i])
            }
        }
        return res
    }else{
        let res = {}
        for (let [key,val] of Object.entries(objOrArr)){
            res[key] = val
        }
        return res
    }

}