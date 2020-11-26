console.log("controller online");

const OFF = "off";
const SLOW = "slow";
const MEDIUM = "medium";
const FAST = "fast";
const INSTANT = "instant";
const PASSIVE = "passive";

let speed = OFF;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let response = {};

  if (request.setSpeed) {
    speed = request.setSpeed;
  }
  if (request.getSpeed) {
    response.speed = speed;
  }

  sendResponse(response);
});
