let myName = document.querySelector("#username");
let myPass = document.querySelector("#password");

function validateForm() {
  let isValid = true;

  if (myName.value == "") {
    document.getElementById("userError").innerHTML = "User name is empty";
    isValid = false;
  } else if (myName.value.length < 3) {
    document.getElementById("userError").innerHTML =
      "User name requires min 3 characters";
    isValid = false;
  }

  if (myPass.value == "") {
    document.getElementById("passError").innerHTML = "Password is empty";
    isValid = false;
  } else if (myPass.value.length < 6) {
    document.getElementById("passError").innerHTML =
      "Password requires min 6 characters";
    isValid = false;
  }

  return isValid;
}
