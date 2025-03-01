function handleMessages(message, sender, sendResponse) {

    fetch(message.url)
      .then((response) => sendResponse({statusCode: response.status}))
      console.log("nemam rad negry bro");
    // Since `fetch` is asynchronous, must send an explicit `true`
    return true;
  }