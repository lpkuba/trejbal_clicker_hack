document.getElementById("asd").addEventListener("click", test);

async function test() {
    const {statusCode} = await chrome.runtime.sendMessage({
        url: 'https://example.com'
        
    });

}