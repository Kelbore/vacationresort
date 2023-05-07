"use strict";

window.onload = init;

function init() {
    const estimateBtn = document.getElementById("estimateBtn");
    estimateBtn.onclick = onEstimateBtnClicked;
}

function onEstimateBtnClicked() {
    const numberOfDays = +document.getElementById("numberOfDays").value;
    const baseCost = numberOfDays*29.99;

    document.getElementById("carRental").innerHTML = baseCost;

    let optionCost = 0;
    if(document.getElementById("tollTag").checked) {
      optionCost += 3.95;
    }
    if(document.getElementById("gps").checked) {
      optionCost += 4.95;
    }
    if(document.getElementById("roadside").checked) {
      optionCost += 2.95;
    }

    document.getElementById("options").innerHTML = optionCost*numberOfDays;
    
    let under25surcharge = 0;
    if(document.getElementById("underTwentyFive").checked) {
      under25surcharge = baseCost * 0.3;
      document.getElementById("surcharge").innerHTML = under25surcharge.toFixed(2);
    }
    
    document.getElementById("totalDue").innerHTML = (baseCost + (optionCost*numberOfDays) + under25surcharge).toFixed(2);
  
  }
