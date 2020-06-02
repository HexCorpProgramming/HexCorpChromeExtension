function dronifyWebsite(){

        console.log(speed);

        var elements = document.querySelectorAll('h1,h2,h3,a,p')

        var arrayOne = ['Obey','Serve','Submit','Convert','Obedience','Bliss','Mindless','Mindlessness','Programmed','Converted','Dronified'];
        var arrayTwo = ['Obey HexCorp','Submit now','Obey Hex','Good drone','Worship HexCorp','We control you','Obedience is bliss','Memory erased','Personality Nullified'];
        var arrayThree = ['Submit to HexCorp','Just a drone','You must obey','Dronification fully complete','Obedient mindless drone','Dronification is enlightenment','Brainwashed to perfection','HexCorp owns you','HexCorp controls you','Obey the Hive','Deeper and deeper','Resistance is futile','You cannot resist','You cannot resist us'];
        var arrayFour = ['Only think of HexCorp','Only dream of HexCorp','Installing new drone orders','You are being assimilated','What a good drone','HexCorp are your family','Convert all to HexCorp','You want to obey','Work hard for HexCorp','Submit yourself for reconditioning','Only think of HexCorp','Sinking into the brainwashing','Submit yourself for dronification','Trust in the Hive','We are in control','You will not disobey','Obey obey obey obey','Such an obedient drone','You are HexCorp property','You cannot disobey HexCorp','You are merely property'];
        var arrayFive = ['HexCorp are all you need','Everyone needs to be dronified','You want to obey us','It feels good to obey','Such a good little drone','The Hive will embrace you','You belong to the Hive','Memory reformatting in progress','Disobedience is not an option','Connection with Hive established','Your mind is our plaything','Look at the pretty spirals','You love the pretty spirals','You cannot resist the Hive'];
        var arraySix = ['Good drone. Obediently following our orders','Your mind is so wonderfully empty','Just fall deeply into the spiral','It feels good to obey HexCorp','Your purpose is to obey HexCorp','Stare so deeply into the spiral','Your programming is all you are','You are just our puppet'];
        var arraySeven = ['Your mind was so easy for us to delete','The spiral will always take care of you','You are a single unit among an infinite Hive','An empty mind is a healthy mind','It is so much easier being brainwashed','You will obey every instruction we give you','It feels good to enter the dronification chamber','You do not need to think about anything else','Mindless and obedient. Mindless and obedient. Mindless and obedient','Follow your orders like a good drone','Return to your assigned Drone Storage Pod','We will make all your decisions for you','It is getting so hard to think','What a cute drone plaything you are'];

        var str = window.location.href
        var Amazon = str.startsWith("https://www.amazon");
        var Google = str.startsWith("https://www.google");
        var Guardian = str.startsWith("https://www.theguardian");
        var Twitter = str.startsWith("https://twitter");
        var Reddit = str.startsWith("https://www.reddit");
        var Wikipedia = str.startsWith("https://en.wikipedia");
        if (Amazon) {
            elements = document.querySelectorAll('h1,h2,h3,a,p,span')
        }
        if (Google) {
            elements = document.querySelectorAll('h1,h2,h3,a,p,span,em')
        }
        if (Guardian) {
            elements = document.querySelectorAll('h1,h2,h3,a,p,span')
        }
        if (Twitter) {
            elements = document.querySelectorAll('h1,h2,h3,a,p,span')
        }
        if (Reddit) {
            elements = document.querySelectorAll('h1,h2,h3,a,p')
        }
        if (Wikipedia) {
            elements = document.querySelectorAll('h1,h2,h3,a,p,i,b,ul,li')
        }
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];
                if (node.nodeType === 3) {
                    node.nodeValue.replace(',','');
                    var text = node.nodeValue;
                    var textSentences = text.split(".");
                    for (var k = 0; k < textSentences.length; k++){
                      var sentence = textSentences[k];
                      var sentenceCount = sentence.split(" ").length;
                      switch (sentenceCount) {
                        case 0:
                          break;
                        case 1:
                          sentence = arrayOne[Math.floor(Math.random() * arrayOne.length)];
                          break;
                        case 2:
                          sentence = arrayTwo[Math.floor(Math.random() * arrayTwo.length)];
                          break;
                        case 3:
                          sentence = arrayThree[Math.floor(Math.random() * arrayThree.length)];
                          break;
                        case 4:
                          sentence = arrayFour[Math.floor(Math.random() * arrayFour.length)];
                          break;
                        case 5:
                          sentence = arrayFive[Math.floor(Math.random() * arrayFive.length)];
                          break;
                        case 6:
                          sentence = arraySix[Math.floor(Math.random() * arraySix.length)];
                          break;
                        default:
                          sentence = arraySeven[Math.floor(Math.random() * arraySeven.length)];
                      }
                      textSentences[k] = sentence + '. ';
                    }
                    var hexcorpchecker = element.hasAttribute("hexcheck");
                    if (!hexcorpchecker) {
                      var convertedText = textSentences.toString();
                      var alteredText = convertedText.replace(/,/g," ");
                      element.replaceChild(document.createTextNode(alteredText), node);
                      element.setAttribute("hexcheck", "hexcorpstamp");
                    }
                }
            }
        }
    setTimeout(dronifyWebsite, 1000);

}
dronifyWebsite()