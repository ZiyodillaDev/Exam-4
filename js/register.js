const form = document.querySelector(".form");
const username = document.querySelector(".js-username");
const phone = document.querySelector(".js-phone");
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");
const elEye = document.querySelector(".js-eye");

elEye.addEventListener("mousedown", () => {
    password.type = "text";
});
elEye.addEventListener("mouseup", () => {
    password.type = "password";
});

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
