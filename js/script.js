// login btn functionality
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("Clicked");
  const number = 123456789;
  const pin = 1234;
  const numberValue = document.getElementById("number").value;
  const pinValue = document.getElementById("pin").value;
  //   console.log(typeof numberValue, typeof pinValue);
  if (parseInt(numberValue) === number && parseInt(pin) === pin) {
    window.location.href = "./home.html";
  } else {
    alert("Wrong credentials!");
  }
});
