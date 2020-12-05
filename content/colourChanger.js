// This is pretty simple in terms of what it's doing
// But what if it was purple?

function changeColour() {
  const currentSpeed = getSpeed();
  if (currentSpeed !== OFF && currentSpeed !== PASSIVE) {
    const all = document.getElementsByTagName("*");

    for (let i = 0; i < all.length; i++) {
      all[i].style.color = "purple";
    }
  }
  setTimeout(changeColour, 1000);
}

changeColour();
