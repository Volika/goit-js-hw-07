import { galleryItems } from './gallery-items.js';
// Change code below this line
// const galleryItems = document.querySelector('.gallery');
const galleryImages = document.querySelector('.gallery');
galleryImages.addEventListener("click", selectGalleryImages);
const numberOfItems = galleryItems.length;

createGallery(numberOfItems);
// console.log(galleryItems);
// const gallery = new SimpleLightbox({ elements: '.gallery a' });
// gallery.next();

function selectGalleryImages(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return;
    }
    const selectedImagesUrl = event.target.href;
    // console.log(event.target.src);

    // selectedImagesShow(selectedImagesUrl);

}


function createGallery(numberOfItems) {
    const items = [];
    for (let i = 0; i < numberOfItems; i += 1) {
        const itemImg = createImgElement(galleryItems[i].preview, galleryItems[i].description);
        const itemA = createAElement(galleryItems[i].original);
        const itemLi = createLiElement();
        itemA.appendChild(itemImg);
        itemLi.appendChild(itemA);
     
        items.push(itemLi);
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

function createLiElement() {
    const item = document.createElement('li');
    // item.classList.add('gallery__item');
    return item;
}



