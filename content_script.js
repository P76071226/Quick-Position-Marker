(function() {
  const tabId = new URL(window.location.href).origin;

  chrome.storage.local.get([`markedPosition_${tabId}`], (result) => {
    if (result[`markedPosition_${tabId}`] === undefined) {
      // Mark the current position
      const position = window.scrollY;
      chrome.storage.local.set({ [`markedPosition_${tabId}`]: position }, () => {
        console.log('Position marked:', position);
        chrome.runtime.sendMessage({ title: "Click to return to marked position" });
      });
    } else {
      // Return to the marked position
      const position = result[`markedPosition_${tabId}`];
      window.scrollTo(0, position);
      console.log('Returned to position:', position);
      // Clear the marked position
      chrome.storage.local.remove(`markedPosition_${tabId}`, () => {
        chrome.runtime.sendMessage({ title: "Click to mark position" });
      });
    }
  });
})();

