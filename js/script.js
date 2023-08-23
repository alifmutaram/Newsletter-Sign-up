const buttonSent = document.getElementById("buttonSent");
const main = document.querySelector("main");
const sectionSucces = document.querySelector("section");
const emailield = document.getElementById("email-field");
const inputEmail = document.getElementById("email").value;
const errorEmail = document.getElementById("error-email");
const btnDismiss = document.getElementById("btn-dismiss");

buttonSent.addEventListener("click", () => {
  const inputEmail = document.getElementById("email").value;
  const emailValue = document.getElementById("email-value");

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!inputEmail.match(mailFormat)) {
    errorEmail.innerText = "Valid email required";
    document.getElementById("email").style.backgroundColor =
      "hsla(356, 81%, 83%, 0.904)";
    document.getElementById("email").style.border =
      "1px solid hsla(357, 73%, 54%, 0.904)";
    document.getElementById("email").style.color = "hsla(357, 73%, 54%, 0.904)";
    return false;
  } else if (inputEmail.match(mailFormat)) {
    main.classList.add("hidden-1");
    sectionSucces.classList.remove("hidden-1");
    emailValue.innerHTML = inputEmail;
    return true;
  } else {
    errorEmail.innerText = " ";
  }
});
btnDismiss.addEventListener("click", () => {
  document.getElementById("btn-dismiss").style.background =
    "linear-gradient(to right, #ff7d7d , #ef8619)";
});
