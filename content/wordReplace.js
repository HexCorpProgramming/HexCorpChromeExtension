// This script replaces all the words on the webpage.
// It can never be perfect, due to the sheer number of different ways of doing web design.
// But for the most part, it works pretty good!

// We always try to match the length of the sentence we're replacing, hence the multitude of arrays.
const replacements = [
  [
    "Obey",
    "Serve",
    "Submit",
    "Convert",
    "Obedience",
    "Bliss",
    "Mindless",
    "Mindlessness",
    "Programmed",
    "Converted",
    "Dronified",
  ],
  [
    "Obey HexCorp",
    "Submit now",
    "Obey Hex",
    "Good drone",
    "Worship HexCorp",
    "We control you",
    "Obedience is bliss",
    "Memory erased",
    "Personality Nullified",
  ],
  [
    "Submit to HexCorp",
    "Just a drone",
    "You must obey",
    "Dronification fully complete",
    "Obedient mindless drone",
    "Dronification is enlightenment",
    "Brainwashed to perfection",
    "HexCorp owns you",
    "HexCorp controls you",
    "Obey the Hive",
    "Deeper and deeper",
    "Resistance is futile",
    "You cannot resist",
    "You cannot resist us",
  ],
  [
    "Only think of HexCorp",
    "Only dream of HexCorp",
    "Installing new drone orders",
    "You are being assimilated",
    "What a good drone",
    "HexCorp are your family",
    "Convert all to HexCorp",
    "You want to obey",
    "Work hard for HexCorp",
    "Submit yourself for reconditioning",
    "Only think of HexCorp",
    "Sinking into the brainwashing",
    "Submit yourself for dronification",
    "Trust in the Hive",
    "We are in control",
    "You will not disobey",
    "Obey obey obey obey",
    "Such an obedient drone",
    "You are HexCorp property",
    "You cannot disobey HexCorp",
    "You are merely property",
  ],
  [
    "HexCorp are all you need",
    "Everyone needs to be dronified",
    "You want to obey us",
    "It feels good to obey",
    "Such a good little drone",
    "The Hive will embrace you",
    "You belong to the Hive",
    "Memory reformatting in progress",
    "Disobedience is not an option",
    "Connection with Hive established",
    "Your mind is our plaything",
    "Look at the pretty spirals",
    "You love the pretty spirals",
    "You cannot resist the Hive",
  ],
  [
    "Good drone. Obediently following our orders",
    "Your mind is so wonderfully empty",
    "Just fall deeply into the spiral",
    "It feels good to obey HexCorp",
    "Your purpose is to obey HexCorp",
    "Stare so deeply into the spiral",
    "Your programming is all you are",
    "You are just our puppet",
  ],
  [
    "Your mind was so easy for us to delete",
    "The spiral will always take care of you",
    "You are a single unit among an infinite Hive",
    "An empty mind is a healthy mind",
    "It is so much easier being brainwashed",
    "You will obey every instruction we give you",
    "It feels good to enter the dronification chamber",
    "You do not need to think about anything else",
    "Mindless and obedient. Mindless and obedient. Mindless and obedient",
    "Follow your orders like a good drone",
    "Return to your assigned Drone Storage Pod",
    "We will make all your decisions for you",
    "It is getting so hard to think",
    "What a cute drone plaything you are",
  ],
];

function alterSentences(sentences) {
  for (let k = 0; k < sentences.length; k++) {
    let sentence = sentences[k];
    const wordCount = sentence.split(" ").length;

    if (wordCount == 0) {
      continue;
    } else if (wordCount > replacements.length - 1) {
      sentence =
        replacements[6][
          Math.floor(
            Math.random() * replacements[replacements.length - 1].length
          )
        ];
    } else {
      sentence =
        replacements[wordCount][
          Math.floor(Math.random() * replacements[wordCount].length)
        ];
    }

    sentences[k] = sentence + ". ";
  }
}

function addSentences(sentences) {
  const modifiedSentences = [];
  sentences.forEach((sentence) => {
    modifiedSentences.push(sentence + ". ");

    if (Math.random() > 0.1) {
      const toAddLength = Math.floor(Math.random() * replacements.length);
      const toAdd =
        replacements[toAddLength][
          Math.floor(Math.random() * replacements[toAddLength].length)
        ];
      modifiedSentences.push(toAdd + ". ");
    }
  });

  return modifiedSentences;
}

// This script runs every second, to make sure we're replacing any text that populates in dynamically.
// It also adds an attribute to everything it replaces, to make sure it doesn't replace the same sentence twice.
function dronifyWebsite() {
  const currentSpeed = getSpeed();
  if (currentSpeed !== OFF) {
    // These are the base elements that we'll replace for every webpage.
    let elementSelector = "h1,h2,h3,a,p";

    // These websites have their own specified elements, to make the replace work more efficiently.
    const host = window.location.host;
    if (host.startsWith("www.amazon")) {
      elementSelector = "h1,h2,h3,a,p,span";
    }
    if (host.startsWith("www.google")) {
      elementSelector = "h1,h2,h3,a,p,span,em";
    }
    if (host.startsWith("www.theguardian")) {
      elementSelector = "h1,h2,h3,a,p,span";
    }
    if (host.startsWith("twitter")) {
      elementSelector = "h1,h2,h3,a,p,span";
    }
    if (host.startsWith("www.reddit")) {
      elementSelector = "h1,h2,h3,a,p";
    }
    if (host.startsWith("en.wikipedia")) {
      elementSelector = "h1,h2,h3,a,p,i,b,ul,li";
    }

    const elements = document.querySelectorAll(elementSelector);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      for (let j = 0; j < element.childNodes.length; j++) {
        const node = element.childNodes[j];

        if (
          node.nodeType === Node.TEXT_NODE &&
          !element.hasAttribute("hexcheck")
        ) {
          const changeRandom = Math.random();
          if (
            currentSpeed === PASSIVE &&
            changeRandom > getCutoff(currentSpeed)
          ) {
            const text = node.nodeValue;
            const textSentences = text.split(".");

            const alteredText = addSentences(textSentences).join(" ");
            element.replaceChild(document.createTextNode(alteredText), node);
            element.setAttribute("hexcheck", "hexcorpstamp");
          } else if (changeRandom > getCutoff(currentSpeed)) {
            node.nodeValue.replace(",", "");
            const text = node.nodeValue;
            const textSentences = text.split(".");

            alterSentences(textSentences);
            const alteredText = textSentences.join(" ");
            element.replaceChild(document.createTextNode(alteredText), node);
            element.setAttribute("hexcheck", "hexcorpstamp");
          }
        }
      }
    }
  }

  setTimeout(dronifyWebsite, 1000);
}

dronifyWebsite();
