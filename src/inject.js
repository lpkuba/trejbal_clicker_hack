alert("Injected!");

window.addEventListener("message", (event) =>{
    if(event.data.type !== "FROM_EXTENSION"){return;}
    if(confirm("Přidat?:" + event.data.amount)){
        
        count += event.data.amount;
    };
});