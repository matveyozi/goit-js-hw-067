import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');
console.log(galleryItems);

function render(parentSelector, arrayContent) {
  const gallaryItem = arrayContent.map(element => {
    return `
	<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
  </div>
	`;
  }).join('');
  parentSelector.innerHTML = gallaryItem;

}
render(gallery, galleryItems);


function openImgOriginal(parentSelector) {

  for (let item of parentSelector.children) {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.hasAttribute('data-source')) {
        const instance = basicLightbox.create(`<img src="${e.target.getAttribute('data-source')}" width="800" height="600">`);
        instance.show();
      }
    });
    item.addEventListener('keydown', (e) => {
      if (basicLightbox.visible() || e.key === 'Escape') {
        basicLightbox.visible
      }
    });
  }

}
openImgOriginal(gallery);

