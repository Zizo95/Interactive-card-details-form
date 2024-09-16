const continueButton = document.querySelector(".continue");
const confirmButton = document.querySelector(".confirm");
const invalidMessage = document.querySelectorAll(".invalid");
const section = document.querySelector(".section");
const inputs = document.querySelectorAll("input");



inputs.forEach(input => {
  if(input == ""){
     invalidMessage.style.display = "block";
  }
  else{
    invalidMessage.style.display = "none";
  }
})

confirmButton.addEventListener("click", function(){
  const cardName = document.querySelector(".number");
  const inputName = document.querySelector("#input-name");
  
  let outputName = inputName.value;
  cardName.innerHTML = outputName;

  const cardNo = document.querySelector(".number");
  const inputNo = document.querySelector("#input-no");

  let outputNo = inputNo.value;
  cardNo.innerHTML = outputNo;

  const cardCvc = document.querySelector("card-cvc");
  const  cvc = document.querySelector("#cvc");

  let outputCvc = cvc.value;
  cardCvc.innerHTML = outputCvc;  

  const cardDate = doocument.querySelector(".card-date");
  let date = document.querySelector("#date");
let year = document.querySelector("#year");

date += year = yearly;


})