const continueButton = document.querySelector(".continue");
const confirmButton = document.querySelector(".confirm");
const invalidMessage = document.querySelectorAll(".invalid");
const section = document.querySelector(".section");
const cardNo = document.querySelector(".number");
const cardName = document.querySelector(".name");
const cardDate = doocument.querySelector(".card-date")
const cardCvc = document.querySelector("card-cvc");
const inputs = document.querySelectorAll("input");
const inputName = document.querySelector("#input-name");
const inputNo = document.querySelector("#input-no");
const  cvc = document.querySelector("#cvc");
const date = document.querySelector("#date");
const year = document.querySelector("#year");


inputs.forEach(input => {
  if(input == ""){
     invalidMessage.style.display = "block";
  }
  else{
    invalidMessage.style.display = "none";
  }
})

confirmButton.addEventListener("click", function(
  
))