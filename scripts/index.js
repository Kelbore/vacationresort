"use strict";

const months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];

window.onload = init;

function init() {
  const calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.onclick = onCalculateBtnClicked;
}
  //Bed sizes
  const queenSize = document.getElementById("queenSize").value;
  const kingSize = document.getElementById("kingSize").value;
  const twoBedRoomSuite = document.getElementById("twoBedRoomSuite").value;

  //Discount
  const noDiscount = document.getElementById("noDiscount");
  const seniorDiscount = document.getElementById("seniorDiscount");
  const militaryDiscount = document.getElementById("militaryDiscount");


function getRoomRate(checkInMonth, roomType) {

  if(checkInMonth == months[5] && roomType == "Queen") {
    return 250;
  }
  if(checkInMonth == months[6] && roomType == "Queen") {
    return 250;
  }
  if(checkInMonth == months[7] && roomType == "Queen") {
    return 250;
  }
  if(roomType == "Queen") {
    return 150;
  } 
  if(checkInMonth == months[5] && roomType == "King") {
    return 250;
  }
  if(checkInMonth == months[6] && roomType == "King") {
    return 250;
  }
  if(checkInMonth == months[7] && roomType == "King") {
    return 250;
  }
  if(roomType == "King") {
    return 150;
  } 
  if(checkInMonth == months[5] && roomType == "Two Bedroom Suit") {
    return 350;
  }
  if(checkInMonth == months[6] && roomType == "Two Bedroom Suit") {
    return 350;
  }
  if(checkInMonth == months[7] && roomType == "Two Bedroom Suit") {
    return 350;
  }
  if(roomType == "Two Bedroom Suit") {
    return 210;
  } 
  
}

function onCalculateBtnClicked() {
 let cost = getRoomRate("June" , "Two Bedroom Suit");

  const numberOfAdults = +document.getElementById("numberOfAdults").value;
  const numberOfChildrens =  +document.getElementById("numberOfChildrens").value;
  const capacity = numberOfAdults + numberOfChildrens;

 if(document.getElementById("queenSize").checked && capacity > 5) {
  alert("The room you selected will not hold your party");
 } 
 if(document.getElementById("kingSize").checked && capacity > 2) {
  alert("The room you selected will not hold your party");
 } 
 if(document.getElementById("twoBedRoomSuite").checked && capacity > 6) {
  alert("The room you selected will not hold your party");
 } 

 if(document.getElementById("noDiscount").checked) {
  document.getElementById("originalCost").value = cost;
  document.getElementById("theTax").value = cost * 0.12;
 }
 if(document.getElementById("seniorDiscount").checked) {
  document.getElementById("originalCost").value = cost;
  document.getElementById("discount").value = cost * 0.1;
  document.getElementById("discountedCost").value = cost - (cost*0.1);
  document.getElementById("theTax").value = (cost-(cost*0.1))*0.12;
  document.getElementById("costOfStay").value = (cost-(cost*0.1)) + (cost-(cost*0.1))*0.12;
 }
 if(document.getElementById("militaryDiscount").checked) {
  document.getElementById("originalCost").value = cost;
  document.getElementById("discount").value = cost * 0.2;
  document.getElementById("discountedCost").value = cost - (cost*0.2);
  document.getElementById("theTax").value = (cost-(cost*0.2))*0.12;
  document.getElementById("costOfStay").value = (cost-(cost*0.2)) + (cost-(cost*0.2))*0.12;
 }
}