function ionOut(str){
    const regx = /[a-z]+(t(?=ion))/g
    let array = str.match(regx)
    if (array == null){
        return []
    }
    return array
 }