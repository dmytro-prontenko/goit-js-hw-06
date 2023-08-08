const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let { email, password } = event.target.elements;
  email = email.value;
  password = password.value;

  if (!email || !password) {
    alert("Enter your data");
  } else {
    const formData = { email, password };
    console.log(formData);

    form.reset();
  }
}
