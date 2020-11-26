// speeds
const OFF = "off";
const SLOW = "slow";
const MEDIUM = "medium";
const FAST = "fast";
const PASSIVE = "passive";
const PERMANENT = "permanent";

let speed = OFF;

function updateSpeed() {
  chrome.runtime.sendMessage({ getSpeed: true }, function (response) {
    speed = response.speed;
  });
}
