import {getPhoto} from './data.js';

function createContent() {
  const pictureTemplate = document.querySelector('#picture').content;

  const picturesContainer = document.querySelector('.pictures');

  for(let i = 1; i < 25; i++){
    const pictureData = getPhoto(i);
    const domInstance = pictureTemplate.cloneNode(true);

    const likeContainer = domInstance.querySelector('.picture__likes');
    likeContainer.innerHTML = pictureData.likes;

    const imgContainer = domInstance.querySelector('.picture__img');
    imgContainer.src = pictureData.url;

    const commentsContainer = domInstance.querySelector('.picture__comments');
    commentsContainer.innerHTML = pictureData.comments.length;

    picturesContainer.appendChild(domInstance);
  }
}

export{createContent};
