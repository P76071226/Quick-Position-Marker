chrome.action.onClicked.addListener((tab) => {
  if (tab.url.startsWith('chrome://')) {
    // Show an error message for chrome:// URLs
    chrome.action.setTitle({ tabId: tab.id, title: "Can't use on chrome:// pages" });
    setTimeout(() => {
      chrome.action.setTitle({ tabId: tab.id, title: "Mark/Return to Position" });
    }, 3000);
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content_script.js']
  }).catch(error => {
    console.error('Error executing script:', error);
    chrome.action.setTitle({ tabId: tab.id, title: "Error: " + error.message });
    setTimeout(() => {
      chrome.action.setTitle({ tabId: tab.id, title: "Mark/Return to Position" });
    }, 3000);
  });
});

// Clear marked position when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.storage.local.remove(`markedPosition_${tabId}`);
});

