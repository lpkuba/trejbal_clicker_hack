alert("Injected!");

window.addEventListener("message", (event) =>{
    if(event.data.type !== "FROM_EXTENSION"){return;}
    if(confirm("Přidat?:" + event.data.amount)){
        let temp = clickValue;
        clickValue = 1000000000;
        setTimeout(() => {
            count += event.data.amount;
            clickValue = temp;
        }, 3200);
        
    };
});