
let heldDiscElement = null;
const tower3 = document.getElementById("tower3");

// keep functions small and have one role 
function pickUp(tower) {
    // picking up with no child, dont run
    if(!tower.lastElementChild) return;
    heldDiscElement = tower.lastElementChild;
    moveHolder = document.getElementById("box");
    tower.appendChild(heldDiscElement).style.border="5px solid orange";
}
function putDown(tower) {
    const hasNoDisc = !tower.lastElementChild;
    // without non-clientwidth, it evaluates to null sometimes; so if tower.lastElCh exists.... Null check. as long as truthy/not null, then cool
    const canStack = tower.lastElementChild && (tower.lastElementChild.clientWidth >= heldDiscElement.clientWidth);
    if(hasNoDisc || canStack) {
        tower.appendChild(heldDiscElement);
        heldDiscElement.style.border="none";
        heldDiscElement = null;
    }
}
// control flow of app; brain
function moveDiscs(event) {
    if(!event.currentTarget.classList.contains("towers")) return;
    const tower = event.currentTarget;
    if(!heldDiscElement) {
        pickUp(tower);
    } else {
        putDown(tower);
    }
    // no select towersGroup or discs
    // if conditional with one declaration, don't need the brackets, but put it on same line
    checkWin();
}
function checkWin() {
    const tower3HasAllDiscs = tower3.childElementCount === 4;
    if(tower3HasAllDiscs) {
        document.getElementById("wrapper").appendChild(document.createTextNode("You won!"))
    }
}
for(let tower of document.getElementsByClassName("towers")) {
    tower.onclick = moveDiscs;
}

function autoWin() {
    // match all of discs class elements 
    for(let disc of document.querySelectorAll(".discs")) {
        tower3.appendChild(disc);
    }
}

