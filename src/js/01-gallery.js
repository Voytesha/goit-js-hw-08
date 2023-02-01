// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems){
    return galleryItems.map(({preview, original, description})=>{
        return `<a class='gallery__item' href='${original}'>
        <img  class='gallery__image' src ='${preview}' data-source='${original}' alt ='${description}'>
        </a>`;}).join('');
}

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return
    }
}

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});
