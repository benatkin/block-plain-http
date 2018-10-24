# block-plain-http - a minimal chrome extension to block all plain http requests

Filtering HTTP requests in a Chrome Extension is surprisingly simple. This is all it takes to block all requests starting with `http:`:

manifest.json

``` json
{
  "manifest_version": 2,
  "name": "block-plain-http",
  "version": "0.0.1",
  "background": {
    "scripts": ["background.js"]
  },
  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "tabs",
    "<all_urls>"
  ]
}
```

background.js

``` js
chrome.webRequest.onBeforeRequest.addListener(
  ({url}) => { return {cancel: url.startsWith('http:')}; },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
```
