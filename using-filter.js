function filterShortStateName(arr) {
    arr = arr.filter(arr => arr.length < 7)
    return arr

}

const filterStartVowel = (arr) => arr.filter(x => {
  if (x[0] == 'A' || x[0] == 'E' | x[0] == 'I'| x[0] == 'O'| x[0] == 'U') {
    return x
  }
})

const filter5Vowels = (arr) => arr.filter(x => {
  let count = 0
 
  for (const v of x) {
    if (v == 'A' || v == 'a' || v == 'E' || v == 'e' ||v == 'I' || v == 'i'||v == 'O' || v == 'o' ||v == 'U' || v == 'u') {
      count++
    }
  }
  if (count > 4) {
    return x
  }
})

// a,e,i,o,u
const filter1DistinctVowel = (arr) => arr.filter(x => {
    let lowerStr = x.toLowerCase();
    let matching = lowerStr.match(/[a,e,o,u,i]/gi)
    return matching.every(y => y === matching[0])
})

const multiFilter = (arr) => arr.filter(x => {
    return x.capital.length >= 8 &&
        x.name.match(/^[^a,e,o,u,i]/gi) &&
        x.tag.match(/[a,e,o,u,i]/gi) &&
        x.region.match(/[^South]/gi);
})