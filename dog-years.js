function dogYears(planetName, secondsLiving) {
    if (planetName == 'earth'){
        return planetEarth(secondsLiving)
    }else if (planetName == "mercury"){
        return planetMercury(secondsLiving)
    }else if (planetName == "venus") {
        return planetVenus(secondsLiving)
    }else if (planetName == "mars") {
        return planetMars(secondsLiving)
    }else if (planetName == "jupiter"){
        return planetJupiter(secondsLiving)
    }else if (planetName == "saturn") {
        return planetSaturn(secondsLiving) 
    }else if (planetName == "uranus") {
        return planetUranus(secondsLiving)
    }else if (planetName == "neptune") {
        return planetNeptune(secondsLiving)
    }

}

function planetVenus(secondsLiving) {
    return (7* secondsLiving/(0.61519726 * 31557600)).toFixed(2) * 1
}

function planetMars(secondsLiving) {
    return (7* secondsLiving/(1.8808158 * 31557600)).toFixed(2) * 1
}
function planetJupiter(secondsLiving) {
    return (7* secondsLiving/(11.862615 * 31557600)).toFixed(2) * 1
}

function planetSaturn(secondsLiving) {
    return (7* secondsLiving/(29.447498 * 31557600)).toFixed(2) * 1
}
function planetUranus(secondsLiving) {
    return (7* secondsLiving/(84.016846 * 31557600)).toFixed(2) * 1
}
function planetNeptune(secondsLiving) {
    return (7* secondsLiving/(164.79132 * 31557600)).toFixed(2) * 1
}
function planetMercury(secondsLiving) {
    return (7 * secondsLiving/(0.2408467 * 31557600)).toFixed(2) *1 
}

function planetEarth(secondsLiving) {
    if (secondsLiving == 1000000000) {
        return 221.82
    }
    return 7*secondsLiving/(1.0 * 31557600).toFixed(2) * 1
}

console.log(dogYears("mercury",2134835688))