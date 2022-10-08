import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(`.gallery`);
const imageItemArr = [];
const galleryImages = galleryItems.map((images) => images);
function createGallery(galleryImages, galleryBlock) {
  let galleryString = "";
  galleryImages.forEach((element) => {
    let galleryItem = `<a class="gallery__item" 
        href="${element.original}">
        <img class="gallery__image" 
        src="${element.preview}" 
        alt="${element.description}" />
</a>`;
    galleryString += galleryItem;
  });
  galleryBlock.innerHTML = galleryString;
}

function modalImageZoom(event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`) {
    return;
  }
}
createGallery(galleryImages, gallery);
var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: Attr,
  captionsData: `alt`,
  captionPosition: `bottom`,
  captionDelay: 250,
});
gallery.addEventListener(`click`, modalImageZoom);
console.log(galleryItems);
