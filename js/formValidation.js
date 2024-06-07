// (1) Variablen initialisieren
const submitButton = document.getElementById("submitButton");
const formContainer = document.getElementById("formContainer");
const gameContainer = document.getElementById("game-container");
const emailField = document.getElementById("email");
const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const phoneField = document.getElementById("phone");
const addressField = document.forms["form"]["address"];

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

const onClickSubmit = async () => {
  if (!validateForm()) {
    return
  }

  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto("game", {
    email: emailField.value,
    first_name: firstNameField.value,
    last_name: lastNameField.value,
    phone: phoneField.value,
    address: addressField.value,
  });


  //Datenvalidierung:
  function validateForm() {
    var lastNameValidation = document.forms["form"]["lastName"].value;
    if (lastNameValidation == null || lastNameValidation == "") {
      alert("Last name must be filled out");
      return false;
    }
    var firstNameValidation = document.forms["form"]["firstName"].value;
    if (firstNameValidation == null || firstNameValidation == "") {
      document.forms["form"]["firstName"].classList.remove("hidden")
      return false;
    }
    var emailValidation = document.forms["form"]["email"].value;
    if (emailValidation == null || emailValidation == "") {
      alert("Email must be filled out");
      return false;
    }
    if (!validateEmail(emailValidation)) {
      alert("Email must be valid");
      return false;
    }
    var phoneValidation = document.forms["form"]["phone"].value;
    if (phoneValidation == null || phoneValidation == "") {
      alert("Phone must be filled out");
      return false;
    }
    if (!validatePhone(phoneValidation)) {
      alert("Phone must be valid");
      return false;
    }
    var addressValidation = document.forms["form"]["address"].value;
    if (addressValidation == null || addressValidation == "") {
      alert("Address must be filled out");
      return false;
    }
    return true;
  }
}

function addSpace() {
  console.log(phoneField.value)
  var inputValueLength = phoneField.value.length;
  if (inputValueLength == 3 || inputValueLength == 6 || inputValueLength == 10 || inputValueLength == 13) {
    phoneField.value = phoneField.value + " ";
  }
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePhone(phone) {
  return String(phone)
    .toLowerCase()
    .match(
      /^\+\d{2} \d{2} \d{3} \d{2} \d{2}$/
    );
};
