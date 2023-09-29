const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  if (
    form.elements.email.value.trim() === "" ||
    form.elements.password.value.trim() === ""
  ) {
    alert("Fields must not be empty");
    return;
  }

  const userObj = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };

  console.log(userObj);
  form.reset();
};

form.addEventListener("submit", handleSubmit);
