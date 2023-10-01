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
  let widthAndHeigthStartRef = 30;
  let markup = [];

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${widthAndHeigthStartRef}px`;
    element.style.height = `${widthAndHeigthStartRef}px`;
    element.style.backgroundColor = getRandomHexColor();

    markup.push(element);
    widthAndHeigthStartRef += 10;
  }

  mainBox.append(...markup);
  input.value = "";
};

const destroyBoxes = () => {
  mainBox.innerHTML = "";
};

const onCreateBtnClick = () => {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    alert("Enter number in range of 1-100");
    input.value = "";
    return;
  }

  createBoxes(amount);
};

const onDestroyBtnClick = () => {
  destroyBoxes();
};

createBtn.addEventListener("click", onCreateBtnClick);

destroyBtn.addEventListener("click", destroyBoxes);
