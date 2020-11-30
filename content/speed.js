// speeds
const OFF = "off";
const SLOW = "slow";
const MEDIUM = "medium";
const FAST = "fast";
const PASSIVE = "passive";
const INSTANT = "instant";
const PERMANENT = "permanent";

let speed = OFF;

function updateSpeed() {
  chrome.runtime.sendMessage({ getSpeed: true }, function (response) {
    speed = response.speed;
  });
}

function getSpeed() {
  updateSpeed();
  return speed;
}

function getCutoff(speed) {
  switch (speed) {
    case INSTANT:
      return 0;
    case FAST:
      return 0.9;
    case PERMANENT:
    case MEDIUM:
      return 0.99;
    case PASSIVE:
    case SLOW:
      return 0.999;
    default:
      return 1;
  }
}
