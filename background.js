'use strict';

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({ url: '*://*.zoom.us/*' }, (tabs) => {
    const tabsIds = tabs.filter(tab => tab.url.indexOf("/schedule") === -1).map(tab => tab.id);
    chrome.tabs.remove(tabsIds);
  });
});