function search (info, tab) {
  return function (info, tab) {
    var selection = info.selectionText;
    var url = "https://oldschool.runescape.wiki/w/"+selection;
    chrome.tabs.create ({index: tab.index + 1, url: url, selected: true});
  }
}
chrome.contextMenus.create ({
  "title": "Search on OSRS Wiki",
  "type": "normal",
  "contexts": ["selection"],
  "onclick": search ()
});