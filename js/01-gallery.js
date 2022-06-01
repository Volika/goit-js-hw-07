import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector('.gallery')
galleryImages.addEventListener("click", (event) => {
    event.preventDefault();
})
const numberOfItems = galleryItems.length;
console.log(numberOfItems);

createGallery(numberOfItems);

function createGallery(numberOfItems) {
    const items = [];
    for (let i = 0; i < numberOfItems; i += 1) {
        const itemImg = createImgElement(galleryItems[i].preview, galleryItems[i].original, galleryItems[i].description);
        const itemA = createAElement(galleryItems[i].original);
        const itemDiv = createDivElement();
        itemA.appendChild(itemImg);
        itemDiv.appendChild(itemA);
        let item = itemDiv;
        console.log(item)
        items.push(item);
    }
    galleryImages.append(...items);
}

function createImgElement(preview, original, description) {
    const item = document.createElement('img');
    item.classList.add('gallery__image');
    item.setAttribute('src', preview);
    item.setAttribute('alt', description);
    item.setAttribute('data-source', original);
    return item;
}
function createAElement(original) {
    const item = document.createElement('a');
    item.classList.add('gallery__link');
    item.setAttribute('href', original);
    return item;
}

function createDivElement() {
    const item = document.createElement('div');
    item.classList.add('gallery__item');
    return item;
}

