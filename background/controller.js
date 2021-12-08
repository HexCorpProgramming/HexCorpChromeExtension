console.log("controller online");

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
