const input = document.querySelector("#validation-input");

const checkValidation = () => {
  input.classList =
    input.value.length === Number(input.dataset.length) ? "valid" : "invalid";

  return;
};

input.addEventListener("blur", checkValidation);
