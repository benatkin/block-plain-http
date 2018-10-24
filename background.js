chrome.webRequest.onBeforeRequest.addListener(
  ({url}) => { return {cancel: url.startsWith('http:')}; },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
