// This generates the popup that appears when you click the HexCorp logo from the navbar.
// In future, this will react with the code to be able to control the intensity of the extension.

function speedChange(event) {
	speed = event.target.id;

	if (speed == "off") {
		chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
	        chrome.tabs.executeScript(activeTabs[0].id, { code: 'document.head.appendChild(<div class="hexCorpToggle" id="off"/>' });
	    });
	} else if (speed == "slow") {
		chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
	        chrome.tabs.executeScript(activeTabs[0].id, { code: 'console.log("slow")' });
	    });
	} else if (speed == "medium") {
		chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
	        chrome.tabs.executeScript(activeTabs[0].id, { code: 'console.log("medium")' });
	    });
	} else if (speed == "fast") {
		chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
	        chrome.tabs.executeScript(activeTabs[0].id, { code: 'console.log("fast")' });
	    });
	} else if (speed == "instant") {
		chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
	        chrome.tabs.executeScript(activeTabs[0].id, { code: 'console.log("instant")' });
	    });
	}

    document.getElementById(speed).style.backgroundcolor = "red";
}

function permanentActivate() {
	permanent = true;
}

document.getElementById("off").addEventListener('click', speedChange);
document.getElementById("slow").addEventListener('click', speedChange);
document.getElementById("medium").addEventListener('click', speedChange);
document.getElementById("fast").addEventListener('click', speedChange);
document.getElementById("instant").addEventListener('click', speedChange);

document.getElementById("permanent").addEventListener('click', permanentActivate);