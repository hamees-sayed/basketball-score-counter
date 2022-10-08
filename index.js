let home = 0
let guest = 0

// document.getElementById("score-home") = home
// document.getElementById("score-guest") = guest

function add1Home() {
    home += 1
    document.getElementById("score-home").innerHTML = home
}


function add2Home() {
    home += 2
    document.getElementById("score-home").innerHTML = home
}

function add3Home() {
    home += 3
    document.getElementById("score-home").innerHTML = home
}

function add1Guest() {
    guest += 1
    document.getElementById("score-guest").innerHTML = guest
}


function add2Guest() {
    guest += 2
    document.getElementById("score-guest").innerHTML = guest
}

function add3Guest() {
    guest += 3
    document.getElementById("score-guest").innerHTML = guest
}



function reset() {
    home = 0
    guest = 0

    document.getElementById("score-home").innerHTML = home
    document.getElementById("score-guest").innerHTML = guest

}