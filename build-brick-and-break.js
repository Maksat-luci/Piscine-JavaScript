export {build, repair, destroy,bricks}

var counterBricks = 0
var internal;

function build(integer) {
    internal = setInterval(bricks,100,integer)
}

function bricks(integerBuild) {
    let HowBricks = document.getElementsByClassName('brick').length
    if (HowBricks === integerBuild){
        clearInterval(internal)
        return
    }
    counterBricks++
    let div = document.createElement("div")
    div.setAttribute("class","brick")
    div.setAttribute("id", 'brick-'+String(HowBricks+1))
    if (counterBricks === 2) {
        div.dataset.foundation = true
    }
    if (counterBricks === 3) {
        counterBricks = 0
    }
    document.body.appendChild(div)
}


function repair(...ids) {   
    ids.forEach(id => {
        let toRepair = document.getElementById(id)
        if (toRepair.dataset.foundation) {
            toRepair.dataset.repaired = 'in progress'
        } else {
            toRepair.dataset.repaired = true
        }
    })
}

function destroy() {
    var bricks = document.getElementsByClassName('brick')
    var lastBrick = bricks[bricks.length - 1];
    lastBrick.parentNode.removeChild(lastBrick);
}

