const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const loginOption = document.querySelector(".login")
const registerOption = document.querySelector(".register")

loginOption.addEventListener("click",function(){
    location.replace("login.html")
})
registerOption.addEventListener("click",function(){
    location.replace("register.html")
})