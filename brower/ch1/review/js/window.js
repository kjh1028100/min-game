const container = document.querySelector(".container");
const screen = document.createElement("h1");
const outer = document.createElement("h1");
const inner = document.createElement("h1");
const client = document.createElement("h1");
container.append(screen, outer, inner, client);

const handleWindowResize = () => {
  screen.innerText = `window.screen : ${window.screen.width} ${window.screen.height}`;
  outer.innerText = `window.outer : ${window.outerWidth} ${window.outerHeight}`;
  inner.innerText = `window.inner : ${window.innerWidth} ${window.innerHeight}`;
  client.innerText = `document.clientWidth : ${document.documentElement.clientWidth} ${document.documentElement.clientHeight}`;
};

window.addEventListener("resize", handleWindowResize);
