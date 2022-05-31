import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector('.gallery')

const numberOfItems = galleryItems.length;
console.log(numberOfItems);

createGallery(numberOfItems);

function createGallery(numberOfItems) {
    const items = [];

    for (let i = 0; i < numberOfItems; i += 1) {
        const item = document.createElement('img');
        item.setAttribute('src', galleryItems[i].preview);
        item.setAttribute('alt', galleryItems[i].description);
        item.setAttribute('width', '400px');
        item.setAttribute('height', '260px');
        console.log(item);
        items.push(item);
    }
    galleryImages.append(...items);
}


