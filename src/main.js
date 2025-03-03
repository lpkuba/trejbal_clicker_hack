//SCRIPT NA "POZADÍ" STRÁNKY
console.log("Content script spuštěn");
const injectScript = document.createElement("script");
injectScript.src = chrome.runtime.getURL("src/inject.js");
document.documentElement.appendChild(injectScript);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//  console.log("Přijata zpráva:" + message);
    console.log(message);
    window.postMessage({type: "FROM_EXTENSION", message}, "*");
});