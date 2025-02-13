// declaration des variables
const userFirstName = document.getElementById("userFirstName");
const userName = document.getElementById("userName");
const userBirthDate = document.getElementById("userBirthDate");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const submitButton = document.getElementById("submitButton");
const unvalidFirstName = document.getElementById("unvalidFirstName");
const unvalidName = document.getElementById("unvalidName");
const unvalidBirthDate = document.getElementById("unvalidBirthDate");
const unvalidEmail = document.getElementById("unvalidEmail");
const unvalidPassword = document.getElementById("unvalidPassword");
const Form = document.getElementById("Form");
// -----------------------------
// prevent default form submission
Form.addEventListener("submit", function (event) {
  event.preventDefault();
});
// Ajout des validation en temps reel sur les inputs

// userFirstName
userFirstName.addEventListener("input", function () {
  if (userFirstName.value.length < 3) {
    userFirstName.style.border = "1px solid red";
  } else {
    userFirstName.style.border = "1px solid black";
  }
});

// userName
userName.addEventListener("input", function () {
  if (userName.value.length < 3) {
    userName.style.border = "1px solid red";
  } else {
    userName.style.border = "1px solid black";
  }
});

// birthdate needs to be at least 18 years old
userBirthDate.addEventListener("input", function () {
  const birthDate = new Date(userBirthDate.value);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  if (age < 18) {
    userBirthDate.style.border = "1px solid red";
  } else {
    userBirthDate.style.border = "1px solid black";
  }
});

// email
userEmail.addEventListener("input", function () {
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
  if (!emailRegex.test(userEmail.value)) {
    userEmail.style.border = "1px solid red";
  } else {
    userEmail.style.border = "1px solid black";
  }
});

// password
userPassword.addEventListener("input", function () {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  if (!passwordRegex.test(userPassword.value)) {
    userPassword.style.border = "1px solid red";
  } else {
    userPassword.style.border = "1px solid black";
  }
});

// -----------------------------
// submit button
submitButton.addEventListener("click", function (event) {
  console.log("click");

  if (userFirstName.value.length < 3) {
    unvalidFirstName.textContent =
      "Le prénom doit contenir au moins 3 caractères";
    unvalidFirstName.style.color = "red";
    event.preventDefault();
  } else {
    unvalidFirstName.textContent = "";
  }
  if (userName.value.length < 3) {
    unvalidName.textContent = "Le nom doit contenir au moins 3 caractères";
    unvalidName.style.color = "red";
    event.preventDefault();
  } else {
    unvalidName.textContent = "";
  }
  const birthDate = new Date(userBirthDate.value);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  if (age < 18) {
    unvalidBirthDate.textContent = "Vous devez avoir au moins 18 ans";
    unvalidBirthDate.style.color = "red";
    event.preventDefault();
  } else {
    unvalidBirthDate.textContent = "";
  }
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
  if (!emailRegex.test(userEmail.value)) {
    unvalidEmail.textContent = "L'email n'est pas valide";
    unvalidEmail.style.color = "red";
    event.preventDefault();
  } else {
    unvalidEmail.textContent = "";
  }
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  if (!passwordRegex.test(userPassword.value)) {
    unvalidPassword.textContent =
      "Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre";
    unvalidPassword.style.color = "red";
    event.preventDefault();
  } else {
    unvalidPassword.textContent = "";
  }
});
