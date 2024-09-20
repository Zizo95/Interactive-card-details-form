const confirmButton = document.querySelector(".confirm");
const invalidMessages = document.querySelectorAll(".invalid");
const section = document.querySelector(".section");
const inputs = document.querySelectorAll("input");
const message = document.querySelector(".message");

confirmButton.addEventListener("click", function(event) {
  event.preventDefault();
  let allValid = true;
  
  inputs.forEach((input, index) => {
    if (input.value === "") {
      invalidMessages[index].style.display = "block";
      allValid = false;
    } else {
      invalidMessages[index].style.display = "none";
    }
  });

  if (allValid) {
    const cardName = document.querySelector(".name");
    const inputName = document.querySelector("#input-name");
    let outputName = inputName.value;
    cardName.innerHTML = outputName;

    const cardNo = document.querySelector(".number");
    const inputNo = document.querySelector("#input-no");
    let outputNo = inputNo.value;
    cardNo.innerHTML = outputNo;

    const cardCvc = document.querySelector(".card-cvc");
    const cvc = document.querySelector("#cvc");
    let outputCvc = cvc.value;
    cardCvc.innerHTML = outputCvc;

    const cardDate = document.querySelector(".card-date");
    let month = document.querySelector("#month");
    let year = document.querySelector("#year");

    let yearlyDate = `${month.value}/${year.value.slice(-2)}`;
    cardDate.innerHTML = yearlyDate;

    section.style.display = "none";
    message.style.display = "block";
  }
});
