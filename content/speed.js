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
