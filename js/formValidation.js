// (1) Variablen initialisieren
const submitButton = document.getElementById("submitButton");
const formContainer = document.getElementById("formContainer");
const gameContainer = document.getElementById("game-container");
submitButton.disabled = true;
const emailField = document.getElementById("email");

emailField.addEventListener("keyup", () => {
  onChangeEmailField();
});
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// Interaktionen Code: 
const onChangeEmailField = () => {
  if (emailField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const onClickSubmit = async () => {
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto("user", {
    email: emailField.value,
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    phone: phoneField.value,
    address: address.value,
  });


//Datenvalidierung:
function validateForm() {
  var lastNameValidation = document.forms["myForm"]["lastName"].value;
  if (lastNameValidation == null || lastNameValidation == "") {
      alert("Last name must be filled out");
      return false;
  }
  var firstNameValidation = document.forms["myForm"]["firstName"].value;
  if (firstNameValidation == null || firstNameValidation == "") {
      alert("First name must be filled out");
      return false;
  }
  var emailValidation = document.forms["myForm"]["email"].value;
  if (emailValidation == null || emailValidation == "") {
      alert("Email must be filled out");
      return false;
  }
  var phoneValidation = document.forms["myForm"]["phone"].value;
  if (phoneValidation == null || phoneValidation == "") {
      alert("Phone must be filled out");
      return false;
  }
  var addressValidation = document.forms["myForm"]["address"].value;
  if (addressValidation == null || addressValidation == "") {
      alert("Address must be filled out");
      return false;
  }
  return true;
}}