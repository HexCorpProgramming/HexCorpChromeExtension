// This is pretty simple in terms of what it's doing
// But what if it was purple?

function changeColour() {
  updateSpeed();
  if (speed !== OFF) {
    const all = document.getElementsByTagName("*");

    for (let i = 0; i < all.length; i++) {
      all[i].style.color = "purple";
    }
  }
  setTimeout(changeColour, 1000);
}

changeColour();
