"use strict";

window.setInterval(fetchJson, 10000);
fetchJson();


async function fetchJson() { 
  
    let jsonData = await fetch ("https://kea-alt-del.dk/kata-distortion/");
    let queueData = await jsonData.json();
    console.log(queueData.inQueue)

const app = document.createElement("div");
app.setAttribute("class", "parent");

for(let i=0; i<1; i++){
    const data = document.createElement("h2");
    app.appendChild(data);
}

document.body.appendChild(app);
document.querySelector("h2").textContent = queueData.inQueue;

const divs = document.querySelectorAll(".parent");

/* let value = Array.from(inQueue); */


if (queueData.inQueue < 1){
    document.querySelector(".parent").style.background = "#bada55";
    document.querySelector(".parent").style.width = inQueue + "px";
}



//JEG HAR FÅET DEN TIL AT GØRE... ET ELLER ANDET.


};

    