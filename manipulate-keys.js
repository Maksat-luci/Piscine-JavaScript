

function filterKeys(obj,f) {
    let result = {}
    for(let [key,value] of Object.entries(obj)){
        if (f(key)){
            result[key] = value
        }
    }
    return result

}

function mapKeys(obj,f){
    let result = {}
    for(let [key,value] of Object.entries(obj)){
        result[f(key)] = value
    }
    return result
}

const reduceKeys = (el, fn, accumValue="") => {

    for (const [key, value] of Object.entries(el)) {        
      if (accumValue===''){
        accumValue=key
        continue
      }  
      accumValue =  fn(accumValue, key)        
    }  
    return accumValue
  }
  





