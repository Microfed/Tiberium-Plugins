/**
 * Created by JetBrains WebStorm.
 * User: Microfed
 * Date: 24.02.12
 * Time: 10:55
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    chrome.extension.sendRequest({msg: "pageActionShow"}, function(response) {
        console.log(response);
    });

})