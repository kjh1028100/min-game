const btn = document.querySelector(".btn");

const handleBtnClick = () => {
  const carrot = document.querySelector(".carrot");
  const { x, y } = carrot.getBoundingClientRect();
  console.log(carrot.getBoundingClientRect());
  window.scrollTo({
    top: y,
    left: x,
    behavior: "smooth",
  });
};

btn.addEventListener("click", handleBtnClick);
