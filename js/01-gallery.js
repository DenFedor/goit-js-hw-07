import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(`.gallery`);
const imageItemArr = [];
const galleryImages = galleryItems.map((images) => images);
function createGallery(galleryImages, galleryBlock) {
  galleryImages.forEach((image) => {
    let galleryItem = document.createElement(`div`);
    galleryItem.classList.add(`gallery_item`);
    let imgLink = document.createElement(`a`);
    imgLink.classList.add(`gallery__link`);
    imgLink.href = `${image.original}`;
    let img = document.createElement(`img`);
    img.classList.add(`gallery__image`);
    img.setAttribute(`data-source`, `${image.original}`);
    img.src = image.preview;
    img.alt = image.description;
    imgLink.append(img);
    galleryItem.append(imgLink);
    imageItemArr.push(galleryItem);
    galleryBlock.append(...imageItemArr);
  });
}

function modalImageZoom(event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  }
  let instance = basicLightbox.create(`
 <img
      class="gallery__image"
      src="${event.target.getAttribute(`data-source`)}"
      alt="${event.target.alt}"
    />
`);
  instance.show();
  if (instance.visible()) {
    gallery.addEventListener(`keyup`, (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
}
createGallery(galleryImages, gallery);
gallery.addEventListener(`click`, modalImageZoom);
