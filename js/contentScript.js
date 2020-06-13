// This script is designed to go over the webpage and find any images, replacing them with HexCorp ones

// Our HexCorp spirals
const imageArray = [
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569699441708-NWA2MWJLGWI3NZYTYHHI/ke17ZwdGBToddI8pDm48kHTW22EZ3GgW4oVLBBkxXg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEg94W6zd8FBNj5MCw-Ij7INTc0XdOQR2FYhNzGmPXJN9--qDehzI3YAaYB5CQ-LA/hexcorpspiral2.gif?format=750w",
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569711588098-2HSVWEQ33K3FMDJ3FDJI/ke17ZwdGBToddI8pDm48kHTW22EZ3GgW4oVLBBkxXg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEg94W6zd8FBNj5MCw-Ij7INTc0XdOQR2FYhNzGmPXJN9--qDehzI3YAaYB5CQ-LA/DRONEGIF.gif?format=750w",
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569711635147-90B6U28OSD7F05XECYCY/ke17ZwdGBToddI8pDm48kHTW22EZ3GgW4oVLBBkxXg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEg94W6zd8FBNj5MCw-Ij7INTc0XdOQR2FYhNzGmPXJN9--qDehzI3YAaYB5CQ-LA/CONVERTGIF.gif?format=750w",
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569711663505-8PRAFZCVQIE1MD475L4I/ke17ZwdGBToddI8pDm48kHTW22EZ3GgW4oVLBBkxXg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEg94W6zd8FBNj5MCw-Ij7INTc0XdOQR2FYhNzGmPXJN9--qDehzI3YAaYB5CQ-LA/HEXCORPGIF.gif?format=750w",
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569711693989-4449YRJPGKWHU941KPHZ/ke17ZwdGBToddI8pDm48kHTW22EZ3GgW4oVLBBkxXg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEg94W6zd8FBNj5MCw-Ij7INTc0XdOQR2FYhNzGmPXJN9--qDehzI3YAaYB5CQ-LA/HEXLATEXGIF.gif?format=750w",
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569711718592-YPR6MA3F3DCL39TRSI1O/ke17ZwdGBToddI8pDm48kHTW22EZ3GgW4oVLBBkxXg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEg94W6zd8FBNj5MCw-Ij7INTc0XdOQR2FYhNzGmPXJN9--qDehzI3YAaYB5CQ-LA/OBEYGIF.gif?format=750w",
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569711746935-CCK6LI1800ZQM05S3FUV/ke17ZwdGBToddI8pDm48kHTW22EZ3GgW4oVLBBkxXg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEg94W6zd8FBNj5MCw-Ij7INTc0XdOQR2FYhNzGmPXJN9--qDehzI3YAaYB5CQ-LA/SERVEGIF.gif?format=750w",
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569711771898-1AQIQOCJM701G8VQ95FK/ke17ZwdGBToddI8pDm48kHTW22EZ3GgW4oVLBBkxXg1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEg94W6zd8FBNj5MCw-Ij7INTc0XdOQR2FYhNzGmPXJN9--qDehzI3YAaYB5CQ-LA/SUBMITGIF.gif?format=750w",
  "https://images.squarespace-cdn.com/content/v1/5cd68fb28dfc8ce502f14199/1569711822606-UZRE5LR3CNBYXOGB5VUE/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyO1g9NOLaL9PWqNcQlJCXiowsirF8QbBu011-R_ZHWagECGkQPQOTJDNseux1URNw/DRONEPOST.gif?format=750w",
];

// This function runs on repeat every second. We need to do this for websites that add content in dynamically.
// There's an extra trick where we're adding an attribute to the images as a sort of stamp.
// This let's the code know that the image has already been replaced, so that it doesn't constantly change the same image over and over.
function dronifyImages() {
  let images = document.querySelectorAll("img,source,media");
  for (let i = 0; i < images.length; i++) {
    if (!images[i].hasAttribute("heximageacheck")) {
      images[i].src = imageArray[Math.floor(Math.random() * imageArray.length)];
      images[i].srcset =
        imageArray[Math.floor(Math.random() * imageArray.length)];
      images[i].setAttribute("heximageacheck", "hexcorpstamp");
    }
  }
  setTimeout(dronifyImages, 1000);
}
dronifyImages();
