import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImages = document.querySelector('.gallery');
galleryImages.addEventListener("click", selectGalleryImages);
const numberOfItems = galleryItems.length;

createGallery(numberOfItems);

function selectGalleryImages(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return;
    }
    const imgTitle = event.target.alt;
   
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
        captionsPosition: 'bottom',
    });
    
}

function createGallery(numberOfItems) {
    const items = [];
 
    for (let i = 0; i < numberOfItems; i += 1) {
        const itemImg = createImgElement(galleryItems[i].preview, galleryItems[i].description);
        const itemA = createAElement(galleryItems[i].original);
      
        itemA.appendChild(itemImg);

        items.push(itemA);
    }
  
    galleryImages.append(...items);
}

function createImgElement(preview, description) {
    const item = document.createElement('img');
    item.classList.add('gallery__image');
    item.setAttribute('src', preview);
    item.setAttribute('alt', description);
    return item;
}
function createAElement(original) {
    const item = document.createElement('a');
    item.classList.add('gallery__item');
    item.setAttribute('href', original);
    item.setAttribute('data-lightbox', "lbox");
    return item;
}


