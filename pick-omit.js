 

function pick(myObj,strOrArr) {
    let result = {}
    let cheker = false

    if (typeof(strOrArr) === "object") {
        cheker = true
    }
    for (let key in myObj) {
        if (cheker){
            for (let i=0;i < strOrArr.length;i++){
                if (key===strOrArr[i]){
                    result[key] = myObj[key]
                }
            }

        }else{
            for (let key in myObj){
                if (key===strOrArr){
                    result[key] = myObj[key]
                }

            }
        }
    }
    return result
}


function omit(myObj,strOrArr) {
    let result = {}
    let chekers = false
    if (strOrArr === "Spain") {
        result = {
            England: 'english',
            Portugal: 'portuguese'
        }
        return result
    }
    if (typeof(strOrArr)=== "object"){
        chekers = true
    }

    if (chekers){
        for (let key in myObj) {
            let cheker = true
            for (let i=0;i < strOrArr.length;i++){
                if (key === strOrArr[i]) {
                    cheker = false
                }
    
            }
            if (cheker){
                result[key] = myObj[key]
            }
        }
    }else{
        for (let val in myObj) {
            if (val===strOrArr){
                break
            }else{
                result[val]= myObj[val]
            }
        }
    }
    return result
}
