const throttle = (func, wait = 0) => {
    let inThrottle
    return (...args) => {
        if (!inThrottle) {
            func.apply(this, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, wait)
        }
    }
}

const opThrottle = (func, wait = 0, options = { leading: false, trailing : false }) => {
    var context, args, result
    var timeout = null
    var previous = 0
    if (typeof(options.trailing) === 'undefined') options.trailing = false
    
    if (typeof(options.leading) === 'undefined') options.leading = false
    
    if (!options) options = {}
    var later = () =>{
        previous = options.leading === false ? 0 : Date.now()
        timeout = null
        result = func.apply(context, args)
        if (!timeout) context = args = null
    }
    return function() {
        var now = Date.now()
        if (!previous && options.leading === false) previous = now
        var remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            result = func.apply(context, args)
            if (!timeout) context = args = null
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
        return result
    }
}