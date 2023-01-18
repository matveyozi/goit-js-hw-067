import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');
console.log(galleryItems);

// Функція рендеру галереї
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


gallery.addEventListener('click', openImgOriginal);

// Функція яка відкриває модалку
function openImgOriginal(e) {
  e.preventDefault();
  // Перевірка на натискання
  if (!e.target.hasAttribute('data-source')) {
    return;
  }
  // Додав функції при відкритті onShow та закритті onClose
  const instance = basicLightbox.create(`<img src="${e.target.getAttribute('data-source')}" width="800" height="600">`, {
    onShow: (instance) => {
      window.addEventListener('keydown', (event) => { if (event.key === 'Escape') instance.close() });
      e.target.removeEventListener('click', openImgOriginal);
    },
    onClose: (instance) => { e.target.removeEventListener('click', openImgOriginal);  }
  });
  instance.show();
}


