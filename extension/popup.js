// This generates the popup that appears when you click the HexCorp logo from the navbar.
// In future, this will react with the code to be able to control the intensity of the extension.

// speed buttons id (convenience)
const SPEEDS = [OFF, SLOW, MEDIUM, FAST, INSTANT, PASSIVE];

function refreshUI() {
  chrome.runtime.sendMessage({ getSpeed: true }, function (response) {
    speed = response.speed;
    console.log("Current speed = " + speed);

    // clear all active
    SPEEDS.forEach(
      (element) => (document.getElementById(element).className -= " active")
    );
    // renders the current button properly
    document.getElementById(speed).className += " active";
  });
}

function speedChange(event) {
  speed = event.target.id;
  console.log("speedChange - speed = " + speed);
  chrome.runtime.sendMessage({ setSpeed: speed });

  refreshUI();
}

// listeners on click -> change the speed
SPEEDS.forEach((element) =>
  document.getElementById(element).addEventListener("click", speedChange)
);

// at load, update the UI accordingly
refreshUI();
