//Elemente aus HTML definieren
const submitButton = document.getElementById("submitButton");
const formContainer = document.getElementById("form");
const gameContainer = document.getElementById("game-container");
const addressField = document.forms["form"]["address"];
const addressErrorField = document.getElementById("address-error");
const emailField = document.getElementById("email");
const emailErrorField = document.getElementById("email-error");
const firstNameField = document.getElementById("firstName");
const firstNameErrorField = document.getElementById("first-name-error");
const lastNameField = document.getElementById("lastName");
const lastNameErrorField = document.getElementById("last-name-error");
const phoneField = document.getElementById("phone");
const phoneErrorField = document.getElementById("phone-error");
const agbField = document.getElementById("agb");
const agbErrorField = document.getElementById("agb-error");
const thankYouText = document.getElementById("thank-you-text");


submitButton.addEventListener("click", async (event) => {
   event.preventDefault();
   onClickSubmit();
});

const onClickSubmit = async () => {
   if (!validateForm()) {
      return
   }
   formContainer.classList.add("hidden");
   thankYouText.classList.remove("hidden");

   // Speichert die Daten in der Datenbank
   await databaseClient.insertInto("game", {
      email: emailField.value,
      first_name: firstNameField.value,
      last_name: lastNameField.value,
      phone: phoneField.value,
      address: addressField.value,
   });


   //Datenvalidierung
   function validateForm() {
      let valid = true;

      if (!addressField.value) {
         addressErrorField.classList.remove("hidden")
         valid = false;
      } else {
         addressErrorField.classList.add("hidden")
      }

      if (!firstNameField.value) {
         firstNameErrorField.classList.remove("hidden")
         valid = false;
      } else {
         firstNameErrorField.classList.add("hidden")
      }

      if (!lastNameField.value) {
         lastNameErrorField.classList.remove("hidden")
         valid = false;
      } else {
         lastNameErrorField.classList.add("hidden")
      }

      if (!emailField.value || !validateEmail(emailField.value)) {
         emailErrorField.classList.remove("hidden")
         valid = false;
      } else {
         emailErrorField.classList.add("hidden")
      }

      if (!phoneField.value || !validatePhone(phoneField.value)) {
         phoneErrorField.classList.remove("hidden")
         valid = false;
      } else {
         phoneErrorField.classList.add("hidden")
      }

      if (!agbField.checked) {
         agbErrorField.classList.remove("hidden")
         valid = false;
      } else {
         agbErrorField.classList.add("hidden")
      }


      return valid;
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