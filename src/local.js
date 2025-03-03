//SCRIPT ROZŠÍŘENÍ

let currentTab;
nigga();
let coinsAmountEl = document.getElementById("coins");
let rebirthAmtEl = document.getElementById("rebirths");


async function nigga(){
    currentTab = await getCurrentTab();
    console.log(currentTab);
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

document.getElementById("eraseBtn").addEventListener("click", () => {
    chrome.tabs.sendMessage(currentTab,{action: 'eraseStorage'});

});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}




