function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainBox = document.querySelector("#boxes");

const input = document.querySelector("input[type='number']");

const createBtn = document.querySelector("button[data-create]");

const destroyBtn = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  if (Number(input.value) < 1 || Number(input.value) > 100) {
    alert("Enter number in range of 1-100");
    input.value = "";
    return;
  }

  amount = input.value;
  let widthAndHeigthStartRef = 30;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${widthAndHeigthStartRef}px`;
    element.style.height = `${widthAndHeigthStartRef}px`;
    element.style.backgroundColor = getRandomHexColor();
    mainBox.append(element);
    widthAndHeigthStartRef += 10;
  }
  input.value = "";
};

const destroyBoxes = () => {
  mainBox.innerHTML = "";
};

createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", destroyBoxes);
