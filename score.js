
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let guestScore = 0
let homeScore = 0

function homePlas1point() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homePlas2point() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homePlas3point() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
    


function guestPlas1Point() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestPlas2Point() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestPlas3Point() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function startOver() {
    homeScore = 0 
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

