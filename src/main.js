console.log("Content script spuštěn");
const injectScript = document.createElement("script");
injectScript.src = chrome.runtime.getURL("src/inject.js");
document.documentElement.appendChild(injectScript);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Přijata zpráva:" + message);

    if(message.action === "addCoins"){
        addCoins(message.amount);
    }
});



function addCoins(amount){
    try {
        window.postMessage({type: "FROM_EXTENSION", amount: amount}, "*");
    } catch (error) {
        console.error(error);
    }
}