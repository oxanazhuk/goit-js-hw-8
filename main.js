'use strict';

import images from "./gallery.js";


const ul = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".js-lightbox-image");
const closeBtn = document.querySelector(".js-close-lightbox");

// Деструктуризация объекта из images
const buildImage = ({
  preview,
  original,
  description
}) => `
<li class="gallery__item">
  <a class="gallery__link">
     <img class="gallery__image" 
       src="${preview}" 
       alt="${description}"
       data-original="${original}"/>
  </a>
</li>
`;
const galleryImage=(images =>{
  const layoutImages = images.map(image => buildImage(image));
  ul.innerHTML = layoutImages.join('');
})



ul.addEventListener('click', e => {
  lightbox.classList.add('is-open');
  lightboxImage.src = e.target.dataset.original;
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
})

galleryImage(images)