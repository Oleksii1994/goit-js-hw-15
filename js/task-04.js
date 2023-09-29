function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");

const colorRef = document.querySelector(".color");

const changeColorBtn = document.querySelector(".change-color");

const handleClick = () => {
  const currentColor = getRandomHexColor();

  body.style.backgroundColor = `${currentColor}`;
  colorRef.textContent = `${currentColor}`;
};

changeColorBtn.addEventListener("click", handleClick);
