chrome.webRequest.onBeforeRequest.addListener(
  function({url}) {
    return {cancel: url.indexOf("http:") == 0};
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
