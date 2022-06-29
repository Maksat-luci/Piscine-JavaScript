

function invert(myObj) {

    const result = {}
    Object.entries(myObj).forEach(([key, value]) => {
        result[value] = key
      })
      return result
      
}