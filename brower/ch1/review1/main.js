// 1
// const content = document.querySelector(".content");

// const getSize = () => {
//   content.innerHTML = `<h1>Screen: ${window.screen.width}: ${window.screen.height}</h1>
//                         <h1>Outer: ${window.outerWidth} : ${window.outerHeight} </h1>
//                         <h1>Inner: ${window.innerWidth} : ${window.innerHeight} </h1>
//                         <h1>ClientSize: ${document.documentElement.clientWidth} : ${document.documentElement.clientHeight} </h1>`;
// };
// function init() {
//   window.addEventListener("resize", getSize);
// }

// init();

// 2.
// const box = document.querySelector(".quiue");
// const btn_x = document.querySelector(".btn_x");
// const btn_y1 = document.querySelector(".btn_y1");
// const btn_y2 = document.querySelector(".btn_y2");
// const btn_quiue = document.querySelector(".btn_quiue");

// const handleBtnXClick = (e) => {
//   window.scrollBy(0, -100);
// };
// const handleBtnYClick = (e) => {
//   window.scrollBy(0, 100);
// };
// const handleBtnY2Click = (e) => {
//   window.scrollTo(0, 100);
// };
// const handleQuieClick = (e) => {
//   const check = box.getBoundingClientRect();
//   console.log(check);
//   window.scrollTo({
//     top: check.x,
//     bottom: check.y,
//     behavior: "smooth",
//   });
// };

// btn_x.addEventListener("click", handleBtnXClick);
// btn_y1.addEventListener("click", handleBtnYClick);
// btn_y2.addEventListener("click", handleBtnY2Click);
// btn_quiue.addEventListener("click", handleQuieClick);
