// for addMoney

const availableBalanceField = document.querySelector(".available-balance");
let availableBalance = parseInt(availableBalanceField.innerText);
const currentPin = 1234;
const currentAccountNumber = 123456789;
document.getElementById("add-money-btn").addEventListener("click", function () {
  const typedBankAccountNumber = parseInt(
    document.getElementById("accNumber").value,
  );
  const addAmount = parseInt(document.getElementById("addAmount").value);
  const typedPin = parseInt(document.getElementById("pin").value);
  //   console.log(availableBalance, typedBankAccountNumber, addAmount, typedPin);
  if (
    currentPin === typedPin &&
    currentAccountNumber === typedBankAccountNumber
  ) {
    availableBalance += addAmount;
    availableBalanceField.innerText = availableBalance;
  } else {
    alert("Wrong info!");
  }
});

// for cashout
document.getElementById("cashout-btn").addEventListener("click", function () {
  const typedAgentAccountNumber = parseInt(
    document.getElementById("agentAccNumber").value,
  );
  const cashoutAmount = parseInt(
    document.getElementById("cashoutAmount").value,
  );
  const typedPin = parseInt(document.getElementById("cashoutPin").value);
  //   console.log(availableBalance, typedAgentAccountNumber, cashoutAmount, typedPin);
  if (
    currentPin === typedPin &&
    currentAccountNumber === typedAgentAccountNumber
  ) {
    availableBalance -= cashoutAmount;
    availableBalanceField.innerText = availableBalance;
  } else {
    alert("Wrong info!");
  }
});

// toggling between add money and cashout
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("cashout-section").style.display = "none";
  });
document.getElementById("cashout-card").addEventListener("click", function () {
  document.getElementById("cashout-section").style.display = "block";
  document.getElementById("add-money-section").style.display = "none";
});
