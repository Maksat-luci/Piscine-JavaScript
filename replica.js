'use strict'

const replica = (...args) => {
    let res = {}
    args.forEach(obj => {
        for (const [key, value] of Object.entries(obj)) {

            if(isObject(value) && isObject(res[key])) {
                res[key] = replica(res[key], value)
                continue
            }
            
            res[key] = value
        }
    })
    return res
}

const isObject = (foo) => Object.prototype.toString.call(foo) === '[object Object]'
