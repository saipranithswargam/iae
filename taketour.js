const container = document.querySelector(".container");
const url = "https://picsum.photos/600";
var images = [];
var page = 1;

// OnScroll event (Taken from Florin Pop's Infinite Scroll - https://codepen.io/FlorinPop17/pen/RwwvKYJ)


window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;


  if (clientHeight + scrollTop >= scrollHeight - 5) {
    loadImages(6);
  }
});

function loadImages(range) {
  for (let i = 0; i < range; i++) {
    let image = document.createElement("div");

    image.classList.add("col");

    image.innerHTML = `
       <img src="${url}?t=${new Date().getTime() + i}" alt="" />
    `;

    container.appendChild(image);
  }
}

loadImages(9);