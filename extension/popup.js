// This generates the popup that appears when you click the HexCorp logo from the navbar.
// In future, this will react with the code to be able to control the intensity of the extension.

const OFF = "off";
const SLOW = "slow";
const MEDIUM = "medium";
const FAST = "fast";
const INSTANT = "instant";
const PASSIVE = "passive";

let speed = OFF;

function speedChange(event) {
  speed = event.target.id;

  chrome.runtime.sendMessage({ setSpeed: speed });
}

document.getElementById(OFF).addEventListener("click", speedChange);
document.getElementById(SLOW).addEventListener("click", speedChange);
document.getElementById(MEDIUM).addEventListener("click", speedChange);
document.getElementById(FAST).addEventListener("click", speedChange);
document.getElementById(INSTANT).addEventListener("click", speedChange);
document.getElementById(PASSIVE).addEventListener("click", speedChange);
