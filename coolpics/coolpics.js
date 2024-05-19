const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menuItems = document.getElementById("menu-items");
  menuItems.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.getElementById("menu-items");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </div>`;
}


function closeViewer() {
  const viewerElement = document.querySelector('.viewer');
  if (viewerElement) {
    viewerElement.remove();
  }
}

function viewHandler(event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === 'IMG') {
    const srcParts = clickedElement.src.split('-');
    const newSrc = `${srcParts[0]}-full.jpeg`;

    const viewer = viewerTemplate(newSrc, clickedElement.alt);
    document.body.insertAdjacentHTML('afterbegin', viewer);

    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  gallery.addEventListener('click', viewHandler);
});
function closeViewer() {
  const viewerElement = document.querySelector('.viewer');
  if (viewerElement) {
    viewerElement.remove();
  }
}
