// declaration des variables
const userFirstName = document.getElementById("userFirstName");
const userName = document.getElementById("userName");
const userBirthDate = document.getElementById("userBirthDate");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const submitButton = document.getElementById("submitButton");
const resetButton = document.getElementById("resetButton");
const unvalidFirstName = document.getElementById("unvalidFirstName");
const unvalidName = document.getElementById("unvalidName");
const unvalidBirthDate = document.getElementById("unvalidBirthDate");
const unvalidEmail = document.getElementById("unvalidEmail");
const unvalidPassword = document.getElementById("unvalidPassword");
const Form = document.getElementById("Form");
// -----------------------------
// initialisation local storage
if (localStorage.getItem("user")) {
  const user = JSON.parse(localStorage.getItem("user"));
  userFirstName.value = user.firstName;
  userName.value = user.name;
  userBirthDate.value = user.birthDate;
  userEmail.value = user.email;
  userPassword.value = user.password;
}

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

// -----------------------------
// save the data in the local storage
submitButton.addEventListener("click", function () {
  const user = {
    firstName: userFirstName.value,
    name: userName.value,
    birthDate: userBirthDate.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  localStorage.setItem("user", JSON.stringify(user));
});
// reset button add new user
resetButton.addEventListener("click", function () {
  localStorage.removeItem("user");
  userFirstName.value = "";
  userName.value = "";
  userBirthDate.value = "";
  userEmail.value = "";
  userPassword.value = "";
  unvalidFirstName.textContent = "";
  unvalidName.textContent = "";
  unvalidBirthDate.textContent = "";
  unvalidEmail.textContent = "";
  unvalidPassword.textContent = "";
});

// --------------- exo 2 ----------------
const Video = document.getElementById("Video");
Video.controls = true;
localStorage.setItem("video", JSON.stringify(Video));
// -----------------------------
// save user last listen position in the storage and start the video from last listener position when reloading the page
// if (localStorage.getItem("video")) {
//   const currentTime = JSON.parse(localStorage.getItem("video"));
//   Video.currentTime = currentTime;
// }
// document.addEventListener("DOMContentLoaded", function reloadVideo() {
//   localStorage.setItem("video", JSON.stringify(Video.currentTime));
// });

// exo 3
const subButton = document.getElementById("subButton");
const showdiv = document.getElementById("show");

// initialisation api
const apiKey = "59d4e1538db64b4aa4c67e2b6b7e603b"; //my api key
const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=59d4e1538db64b4aa4c67e2b6b7e603b`;
//--------------------------------------
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    showdiv.innerHTML = "";
    data.articles.forEach((article) => {
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("article");
      articleDiv.classList.add("col-12");
      articleDiv.classList.add("col-md-6");
      showdiv.classList.add("row");
      articleDiv.innerHTML = `
      <div class="p-0">
      <img src="${article.urlToImage}" alt="${article.title}" />
      <div class="article-content bg-light d-flex flex-column justify-content-between px-2 py-3">
      <h2>${article.title}</h2>
        <p >${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
        </div>
      </div>
        `;
      showdiv.appendChild(articleDiv);
    });
  });
