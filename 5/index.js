let num1 = 0
let num2 = 0

let homeScoreEL = document.getElementById("home-score")
let guestScoreEL = document.getElementById("guest-score")

let homePlus1EL = document.getElementById("home-plus-1")
let guestPlus1EL = document.getElementById("guest-plus-1")


function addhome1(){
  num1 += 1
  homeScoreEL.textContent = num1
}

function addhome2(){
  num1 += 2
  homeScoreEL.textContent = num1
}

function addhome3(){
  num1 += 3
  homeScoreEL.textContent = num1
}

function addguest1(){
  num2 += 1
  guestScoreEL.textContent = num2
}

function addguest2(){
  num2 += 2
  guestScoreEL.textContent = num2
}

function addguest3(){
  num2 += 3
  guestScoreEL.textContent = num2
}

/*Applying DRY principle
let num1 = 0
let num2 = 0

let homeScoreEL = document.getElementById("home-score")
let guestScoreEL = document.getElementById("guest-score")

// One function to rule them all
function addPoints(team, points) {
  if (team === 'home') {
    num1 += points
    homeScoreEL.textContent = num1
  } else if (team === 'guest') {
    num2 += points
    guestScoreEL.textContent = num2
  }
}

then in HTML, we can call the function with appropriate arguments:

<button id="home-plus-1" onclick="addPoints('home', 1)">+1</button>
<button id="home-plus-2" onclick="addPoints('home', 2)">+2</button>
<button id="home-plus-3" onclick="addPoints('home', 3)">+3</button>

<button id="guest-plus-1" onclick="addPoints('guest', 1)">+1</button>
<button id="guest-plus-2" onclick="addPoints('guest', 2)">+2</button>
<button id="guest-plus-3" onclick="addPoints('guest', 3)">+3</button> */
