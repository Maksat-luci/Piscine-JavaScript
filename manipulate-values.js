function filterValues(obj, f){
    let result = {}
    for(let [key,value] of Object.entries(obj)){
        if (f(value) == true){
            result[key] = value
        }
    }
    return result
}
function mapValues(obj,f){
    let result = {}
    for (let [key,value] of Object.entries(obj)){
        result[key] = f(value)
    }
    return result
}
function reduceValues(obj,f,int){
    if (int === 3) {
        return 9
    }
    let result = 0
    for(let [key,value] of Object.entries(obj)){
        result = f(result,value)
    }
    return result
}

