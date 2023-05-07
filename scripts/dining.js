"use strict";

window.onload = init;
function init() {
    const payAsYouGo = document.getElementById("payAsYouGo");
    payAsYouGo.onclick = payAsYouGoBtnClicked;
    const allInclusive = document.getElementById("allInclusive");
    allInclusive.onclick = payAsYouGoBtnClicked;
}

function payAsYouGoBtnClicked() {
    if(document.getElementById("payAsYouGo").checked) {
        document.getElementById("restaurants").style.display = "table";
    }
    if(document.getElementById("allInclusive").checked) {
        document.getElementById("restaurants").style.display = "none";
    }
    if(document.getElementById("allInclusive").checked) {
        document.getElementById("priceChart").style.display = "table";
    }
    if(document.getElementById("payAsYouGo").checked) {
        document.getElementById("priceChart").style.display = "none";
    }
}

