console.log("Content script spuštěn");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Přijata zpráva:" + message);

    if(message.action === "addCoins"){
        addCoins(message.amount);
    }
});


function addCoins(amount){
    try {
        const injectScript = document.createElement("script");
        injectScript.src = chrome.runtime.getURL("src/inject.js");
        document.documentElement.appendChild(injectScript);
    } catch (error) {
        console.error(error);
    }
}