function countLeapYears(date) {
    if (date == '0001-12-01'){
        return 0
    }
    let yearNum = date.getFullYear()
    return Math.floor((yearNum / 4) - (yearNum / 100) + (yearNum / 400))
}

