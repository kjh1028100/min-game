const btn = document.querySelectorAll("button");

const handleDownClick = () => {
  window.scrollBy(0, 100);
};
const handleUpClick = () => {
  window.scrollBy(0, -100);
};
const handleMoveClick = () => {
  window.scroll(0, 100);
};
const handleUniqueClick = (event) => {
  const unique = document.querySelector(".unique");
  console.log(unique.getBoundingClientRect());
  const { x, y } = unique.getBoundingClientRect();
  console.log(event.x, event.y);
  window.scrollTo({
    top: y,
    left: x,
    behavior: "smooth",
  });
};

btn[0].addEventListener("click", handleDownClick);
btn[1].addEventListener("click", handleUpClick);
btn[2].addEventListener("click", handleMoveClick);
btn[3].addEventListener("click", handleUniqueClick);
