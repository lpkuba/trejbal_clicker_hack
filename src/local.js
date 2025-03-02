let currentTab;
nigga();
let coinsAmountEl = document.getElementById("coins");


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
    chrome.tabs.sendMessage(currentTab, { action: "addCoins", amount: coinsAmountEl.value*1});
    }
});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}




