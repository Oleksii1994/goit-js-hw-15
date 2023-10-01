const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = form.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Fields must not be empty");
    return;
  }

  const userObj = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(userObj);
  form.reset();
};

form.addEventListener("submit", handleSubmit);
