chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        if (request.msg == "pageActionShow"){
            chrome.pageAction.show(sender.tab.id);

            // Add onClick event on pageAction icon
            chrome.pageAction.onClicked.addListener(function(tab) {
                chrome.tabs.executeScript(tab.id, {file:"/js/collectBonuses.js"});
            });
        }
    });