const form = document.querySelector(".form");
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

  fetch("http://localhost:5000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.token) {
        location.replace("client.html");
      }
    })
    .catch((err) => console.log(err));
});

