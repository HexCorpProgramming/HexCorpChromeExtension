// This is pretty simple in terms of what it's doing
// But what if it was purple?

var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
 all[i].style.color = "purple";
}
