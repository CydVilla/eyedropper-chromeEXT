function sendMessage() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "pageToSpeech" },
      function (response) {
        console.log(response, 'hey')
      }
    );
  });
}

chrome.browserAction.onClicked.addListener(function (tabs) {
  //fired when the user clicks on the ext's icon
  sendMessage();
});