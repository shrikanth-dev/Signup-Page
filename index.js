document.querySelector("#show-btn").addEventListener("click", function () {
  document.querySelector(".sign-up-form").classList.add("active");
});

document
  .querySelector(".sign-up-form .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".sign-up-form").classList.remove("active"); 
  });
