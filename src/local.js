//SCRIPT ROZŠÍŘENÍ
console.log("Script rozšíření běží!");

let currentTab;
nigga();
let coinsAmountEl = document.getElementById("coins");
let rebirthAmtEl = document.getElementById("rebirths");


async function nigga(){
    currentTab = await getCurrentTab();
    console.log(currentTab);
}

function loadBody(){
    alert("Body loaded!");
    document.getElementById("salesCheck").checked = localStorage.getItem("salesCheck");
}


document.getElementById("coinsBtn").addEventListener("click", () => {
    if(isNaN(coinsAmountEl.value)){
        alert("Neplatné číslo!");
        return;
    }
    else{
    chrome.tabs.sendMessage(currentTab,{amount: coinsAmountEl.value*1, action: 'addCoins'});
    }
});

document.getElementById("rebirthBtn").addEventListener("click", () => {
    if(isNaN(rebirthAmtEl.value)){
        alert("Neplatné číslo!");
        return;
    }
    else{
    chrome.tabs.sendMessage(currentTab,{amount: rebirthAmtEl.value*1, action: 'addRebirths'});
    }
});

document.getElementById("saleCheck").addEventListener("change", () => {
    if(document.getElementById("saleCheck").checked){
        chrome.tabs.sendMessage(currentTab,{action: 'blackfridayON'});
        localStorage.setItem("salesCheck", true);
        var audio = new Audio('./src/vyprodej.mp3');
        audio.play();
    }
    else{
        localStorage.setItem("salesCheck", false);
        chrome.tabs.sendMessage(currentTab,{action: 'blackfridayOFF'});
    }
});

document.getElementById("eraseBtn").addEventListener("click", () => {
    chrome.tabs.sendMessage(currentTab,{action: 'eraseStorage'});

});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}




