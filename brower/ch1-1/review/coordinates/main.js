const col = document.querySelector(".col");
const row = document.querySelector(".row");
const target = document.querySelector(".target");
const span = document.querySelector(".coordinates__description");

// 1.
// const handleMouseMove = (e) => {
//   const { pageX, pageY } = e;
//   target.style.left = `${pageX}px`;
//   target.style.top = `${pageY}px`;
//   col.style.left = `${pageX}px`;
//   row.style.top = `${pageY}px`;
//   span.style.left = `${pageX}px`;
//   span.style.top = `${pageY}px`;
//   span.innerText = `(${pageX},${pageY})`;
// };

// 2.브라우저 렌더링에 좋은 코드
const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  // col.style.transform = `translateY(${clientX}px)`;
  target.style.transform = `translate(${clientX}px,${clientY}px)`;
};

window.addEventListener("mousemove", handleMouseMove);
