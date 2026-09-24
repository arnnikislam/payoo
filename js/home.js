// for addMoney
let savedHistory = [];
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
    const historyData = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    // console.log(historyData)
    savedHistory.push(historyData);
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
    const historyData = {
      name: "Cashout",
      date: new Date().toLocaleTimeString(),
    };
    // console.log(historyData)
    savedHistory.push(historyData);
  } else {
    alert("Wrong info!");
  }
});

// toggling using reusable function
// reusable func
function showSection(id, btnId) {
  const btns = document.getElementsByClassName("btn-section");
  for (const btn of btns) {
    btn.style.display = "none";
  }
  document.getElementById(id).style.display = "block";

  // for active color
  const cards = document.getElementsByClassName("card");
  for (const card of cards) {
    card.classList.remove("card-active");
  }
  document.getElementById(btnId).classList.add("card-active");
}

document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    showSection("add-money-section", "add-money-card");
  });
document.getElementById("cashout-card").addEventListener("click", function () {
  showSection("cashout-section", "cashout-card");
});
document.getElementById("transfer-card").addEventListener("click", function () {
  showSection("transfer-section", "transfer-card");
});
document.getElementById("bonus-card").addEventListener("click", function () {
  showSection("bonus-section", "bonus-card");
});
document.getElementById("bill-card").addEventListener("click", function () {
  showSection("bill-section", "bill-card");
});

// transaction
document
  .getElementById("transactions-card")
  .addEventListener("click", function () {
    showSection("transactions-section", "transactions-card");
    for (const data of savedHistory) {
      const historyContainer = document.querySelector(".history-container");

      const historyEachData = document.createElement("div");
      historyEachData.innerHTML = `<div class="item">
              <div class="item-left">
                <img src="./assets/opt-1.png" alt="" />
                <div class="item-data">
                  <h4>${data.name}</h4>
                  <p>Today ${data.date}</p>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-ellipsis-vertical preview-icon"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </div>
            </div>`;
      historyContainer.append(historyEachData);
    }
    savedHistory = [];
  });
