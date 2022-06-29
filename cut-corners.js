function round(num) {
    let res = 0
    let check = false
    if (num < 0) {
        num = num * -1
        check = true
    }
    for (let i = 0; i < num; i++) {
        res++
    }
    let ost = num-(res-1)
    if (ost == 0.5 && check) {
        return (res-1) *-1
    }
    if (ost >= 0.5) {
        if (check) {
            return res *-1
        }
        return res

    } else if (ost < 0.5) {
        if (check) {
            return (res - 1) * -1 
        }
        return res - 1
    } else {
        if (check) {
            return num*-1
        }
        return num
    }
}

function ceil(num) {
    let res = 0
    let check = false
    let ost = 0
    if (num < 0) {
        check = true
        num = num *-1
    }
    ost = num%1
    if (ost == 0) {
        if (!check) {
            return num
        } else if (check) {
            return num*-1
        }
    }
    if (!check) {
        res = num + (1-ost)
        return res
    } else if (check) {
        res = num - ost 
        return res *-1
    }
}

function floor(num) {
    let res = 0
    let ost = 0
    let check = false
    if (num < 0) {
        check = true
        num = num *-1
    }
    ost = num % 1
    if (ost == 0) {
        if (!check) {
            return num
        } else if (check) {
            return num*-1
        }
    }
    if (!check) {
        res = num - ost
        return res
    } else if (check) {
        res = num + (1-ost)
        return res*-1
    }
}

function trunc(num) {
    let res = 0
    let check = false
    let ost = 0
    if (num < 0) {
        check = true
        num = num *-1    
    }
    ost = num % 1
    if (ost == 0) {
        if (!check) {
            return num
        } else if (check) {
            return num*-1
        }
    }
    res = num-ost
    if (!check) {
        return res
    } else if (check) {
        return res *-1
    }
}
