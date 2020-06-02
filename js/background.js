// This script is doing nothing, but if I remove it the whole thing breaks.
// It's like that one brick that nobody thinks is important, but the moment it's removed the whole building falls down
// Please help 

chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
  if(message.msg === "image"){
    fetch("/spiral.json")
          .then(response => response.text())
          .then(data => {
            let dataObj = JSON.parse(data);
            senderResponse({data: dataObj, index: message.index});
          })
          .catch(error => console.log("error", error))
      return true;  // Will respond asynchronously.
  }
});