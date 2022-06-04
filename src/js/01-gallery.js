import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const imageMarkup = createGalleryCardMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', imageMarkup)
function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `}).join('');
 
  
}

const modalLightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
  captionDelay: 250,});