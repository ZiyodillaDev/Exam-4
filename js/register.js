const form = document.querySelector(".form");
const username = document.querySelector(".js-username");
const phone = document.querySelector(".js-phone");
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");
const SentBtn = document.querySelector(".send");
const elEye = document.querySelector(".js-eye");
const elPasswordStrength = document.querySelector(".js-password-strength");
const elNameCheck = document.querySelector(".js-name-check");
const elPhoneCheck = document.querySelector(".js-phone-check");
const elEmailCheck = document.querySelector(".js-email-check");


elEye.addEventListener("mousedown", () => {
  password.type = "text";
});
elEye.addEventListener("mouseup", () => {
  password.type = "password";
});

password.addEventListener("input", (evt) => {
  evt.preventDefault()
  if (password.value.length > 0 && password.value.length <= 4) {
    elPasswordStrength.textContent = "Too short"
    elPasswordStrength.style.color = "red"
  }
  if (password.value.length > 4 && password.value.length <= 7) {
    elPasswordStrength.textContent = "Normal"
    elPasswordStrength.style.color = "yellow"
  }
  if (password.value.length > 7) {
    elPasswordStrength.textContent = "Good"
    elPasswordStrength.style.color = "lightgreen"
  }
  if (password.value.length == 15) {
    elPasswordStrength.textContent = "Max"
    elPasswordStrength.style.color = "red"
  }
});
username.addEventListener("input", (evt) => {
  evt.preventDefault()
  if (username.value.length <= 3 ) {
    elNameCheck.innerHTML = "Username shoud be at least 3"
    elNameCheck.style.color = "red"
    elNameCheck.style.fontSize = "10px"
  }else{
    elNameCheck.innerHTML = "Username corrected"
    elNameCheck.style.color = "green"
  }
})
phone.addEventListener("input", (evt) => {
  evt.preventDefault()
  if (phone.value.length != 9) {
    elPhoneCheck.textContent = "Number shoud be 9 length"
    elPhoneCheck.style.color = "red"
    elPhoneCheck.style.fontSize = "10px"
  }else{
    elPhoneCheck.textContent = "Now it's correct"
    elPhoneCheck.style.color = "green"
  }
})

email.addEventListener("input", (evt) => {
  evt.preventDefault()
  if ( email.value.split("@gmail.com").length-1 == "") {
    elEmailCheck.textContent = "Email should be valid"
    elEmailCheck.style.color = "red"
    elEmailCheck.style.fontSize = "10px"
  }
  else{
    elEmailCheck.textContent = "Email corrected"
    elEmailCheck.style.color = "green"
  }
})

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: username.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        location.replace("client.html");
      }
    })
    .catch((err) => console.log(err));
});
