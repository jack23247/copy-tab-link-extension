/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}


/**
 * Copies text to the clipboard
 * Based on this browser extension code: https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/clipboard-helper.js
 * @param {string} text the text to copy to the clipboard
 */
function copyToClipboard(text) {
  function onCopy(event) {
    document.removeEventListener("copy", onCopy, true);
    // Hide the event from the page to prevent tampering.
    // TODO: not sure what this means
    event.stopImmediatePropagation();

    // set clipboard content
    event.preventDefault();
    event.clipboardData.setData("text/plain", text);
  }
  document.addEventListener("copy", onCopy, true);

  // this requires the clipboardWrite permission
  document.execCommand("copy");
}

function splitUrl(url, sep = "?") {
  return url.split(sep).at(0);
}

browser.menus.create({
  id: "copy-tab-url",
  title: "Complete",
  contexts: ["tab"]
}, onCreated);

browser.menus.create({
  id: "copy-tab-url-no-querystring",
  title: "Without Querystring",
  contexts: ["tab"]
}, onCreated);

browser.menus.create({
  id: "copy-tab-url-no-fragments",
  title: "Without Fragments",
  contexts: ["tab"]
}, onCreated);

/*
 * Click event listener
*/
browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "copy-tab-url":
      copyToClipboard(tab.url);
      break;
    case "copy-tab-url-no-querystring":
      copyToClipboard(splitUrl(tab.url));
      break;
    case "copy-tab-url-no-fragments":
      copyToClipboard(splitUrl(tab.url, "#"));
      break;
  }
});
