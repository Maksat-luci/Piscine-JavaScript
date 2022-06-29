

const defaultCurry = (obj1) => {
    let res = {}
    return function (obj2) {
      for (const [key, value] of Object.entries(obj1)) { if (obj2[key] === undefined) { res[key] = value } else { res[key] = obj2[key] } }
      for (const [key, value] of Object.entries(obj2)) { if (obj1[key] === undefined) { res[key] = value } }; return res
    }
  }
  
  const mapCurry = (fn) => {
    let res = {}
    return function (obj) { for (const [key, value] of Object.entries(obj)) { let temp = fn([key, value]); res[temp[0]] = temp[1] }; return res }
  }
  

  const reduceCurry = (fn) => {
    return function (obj, acc) {
      for (const [key, value] of Object.entries(obj)) { if (acc === undefined) { acc = fn([key, value]) }; acc = fn(acc, [key, value]) }; return acc
    }
  }
  
  const filterCurry = (fn) => {
    let res = {}
    return function (obj) { for (const [key, value] of Object.entries(obj)) { if (fn([key, value])) { res[key] = obj[key] } }; return res }
  }
  
  const reduceScore = (el, initVal) => {
    let totalScore = 0
    if (initVal != undefined) { totalScore = initVal }
    for (const [key, pilot] of Object.entries(el)) { for (const [key1, value1] of Object.entries(pilot)) { if (key1.includes('Score') && pilot.isForceUser === true) { totalScore = totalScore + value1 } } }
    return totalScore
  }
  
  const filterForce = (el) => {
    let res = {}
    for (const [pilot, info] of Object.entries(el)) { if (info.shootingScore >= 80 && info.isForceUser) { res[pilot] = info } }
    return res
  }
  
  const mapAverage = (el) => {
    let res = {}
    for (const [pilot, info] of Object.entries(el)) { res[pilot] = info; res[pilot]['averageScore'] = (res[pilot]['pilotingScore'] + res[pilot]['shootingScore']) / 2 }
    return res
  }
  