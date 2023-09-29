const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

input.valueAsNumber = 0;

const handleChange = () => {
  text.style.fontSize = `${Number(input.value)}px`;
};

input.addEventListener("input", handleChange);
