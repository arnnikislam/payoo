document.getElementById("add-money-btn").addEventListener("click", function () {
  const availableBalanceField = document.querySelector(".available-balance");
  let availableBalance = parseInt(availableBalanceField.innerText);
  const currentPin = 1234;
  const currentAccountNumber = 123456789;
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
