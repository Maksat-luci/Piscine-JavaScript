// function dayOfTheYear(date) {
//     let year = date.getFullYear()
//     let start = new Date(year,0,1,0,0)
//     start.setFullYear(year)
    
//     return Math.ceil((date-start)/86400000)
// }


function dayOfTheYear(date) {
    let firstDay = new Date(date.toISOString().slice(0, 4) + '-01-01')
    let diff = (date.getTime() - firstDay.getTime())
    return (diff / 1000 / 60 / 60 / 24) + 1
}