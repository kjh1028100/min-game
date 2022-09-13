const content = document.querySelector(".content");

const getSize = () => {
  content.innerHTML = `<h1>window.screen: ${window.screen.width},${window.screen.height}</h1>
    <h1>window.outer: ${window.outerWidth},${window.outerHeight}</h1>
    <h1>window.inner: ${window.innerWidth},${window.innerHeight}</h1>
    <h1>documentElement.clientWidth: ${document.documentElement.clientWidth},${document.documentElement.clientHeight}</h1>
    `;
};

getSize();

window.addEventListener("resize", getSize);
