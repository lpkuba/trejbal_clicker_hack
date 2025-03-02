

Object.defineProperty(performance, "now", {
    value: () => 0,
    writable: false
});//skoro patch detekce devtools (neháže chybu už😜)
 


alert("Injected!");

window.addEventListener("message", (event) =>{
    if(event.data.type !== "FROM_EXTENSION"){return;}
    if(confirm("Přidat?:" + event.data.amount)){
        const temp = clickValue;
        const temp2 = rebirths;
        clickValue = event.data.amount * 1.1;
        rebirths += event.data.amount;
        count += event.data.amount;
        setTimeout(() => {
            alert("Skončil timeout negři!!!");
            alert("Vracím hodnoty: \n Hodnota kliknutí z: " + clickValue + " na " + temp + "\nA rebirthy z: " + rebirths + " na " + temp2);
            clickValue = temp;
            rebirths = temp2;
        }, 4000);
        alert("To už jsme za timeoutem??? MRDAT HO DO PÍČI!!!");


    };
});