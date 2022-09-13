"use-strict";

const horizontality = document.querySelector(".horizontality");
const verticality = document.querySelector(".verticality");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

const handleMouseMove = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  horizontality.style.top = `${y}px`;
  verticality.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.innerText = `(${x},${y})`;
};

document.addEventListener("mousemove", handleMouseMove);
