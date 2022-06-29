const retry = (count,callback) => {
    let k = 1 
    const retries = (...args) => callback(...args).catch(err =>{
        if (k > count) throw err
        k++
        return retries(...args)
    })
    return retries
}
const timeout = (delay, callback) => async (...args) => {

    const prom = new Promise(resolve => {
        setTimeout(resolve, delay)
    })

    const value = await Promise.race([callback(...args), prom])

    if (!value) throw new Error('timeout')
    
    return value
}