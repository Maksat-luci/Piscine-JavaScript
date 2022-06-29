function isPositive(integer) {
    if (integer > 0) {
        return true
    }else{
        return false
    }
}

function abs(integer) {
    if (integer < 0) {
        integer *= -1
    }
    return integer
}

// Create a isPositive function that takes a number as parameter and return true if the given number is stricly positive, or false otherwise

// Create the abs function that takes one number argument and returns its absolute value. You are not allowed to use Math.abs, make your own.