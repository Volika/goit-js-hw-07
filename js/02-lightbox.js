import { galleryItems } from './gallery-items.js';
// Change code below this line
// const galleryItems = document.querySelector('.gallery');
const galleryImages = document.querySelector('.gallery');
galleryImages.addEventListener("click", selectGalleryImages);
const numberOfItems = galleryItems.length;
// const itemArray = [];
   
createGallery(numberOfItems);
// console.log(galleryItems);
// const gallery = new SimpleLightbox({ elements: '.gallery a' });
// gallery.next();

function selectGalleryImages(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return;
    }
    const imgTitle = event.target.alt;
   
    let lightbox = new SimpleLightbox('.gallery a', { /* options */ });
    lightbox.captionsData = imgTitle;
    // console.log(lightbox.captionsData);
    
    lightbox.refresh();
//      $('.gallery a').on('open.simplelightbox', function () {
//   // код....
// });
}
// _.debounce(() => {
//     console.log("Scroll handler call after 300ms pause");
//   }, 300)

function createGallery(numberOfItems) {
    const items = [];
 
    for (let i = 0; i < numberOfItems; i += 1) {
        const itemImg = createImgElement(galleryItems[i].preview, galleryItems[i].description);
        const itemA = createAElement(galleryItems[i].original);
      
        itemA.appendChild(itemImg);

        // const itemLi = createLiElement();
        // itemLi.appendChild(itemA);
        items.push(itemA);
    }
  
    galleryImages.append(...items);
}

function createImgElement(preview, description) {
    const item = document.createElement('img');
    item.classList.add('gallery__image');
    item.setAttribute('src', preview);
    item.setAttribute('alt', description);
    // item.setAttribute('title', description);
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



