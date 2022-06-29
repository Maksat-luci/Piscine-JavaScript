function sign(integer) {
    if (integer > 0) {
        return 1
    }else if (integer == 0) {
        return 0
    }else{
        return -1
    }

}

function sameSign(one, two) {
    if (sign(one) == 1 && sign(two) == 1){
        return true
    }else if (sign(one) == 0 && sign(two) == 0){
        return true
    }else if (sign(one) == -1 && sign(two) == -1){
        return true
    }else{
        return false
    }
}