import {getRandomInt} from './util.js';

function getPhotos() {
  const photos = [];
  for(let i = 1; i < 26; i++) {
    photos.push(getPhoto(i));
  }
  return photos;
}

export{getPhoto};

function getPhoto(i) {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getDescription(),
    likes: getRandomInt(15, 200),
    comments: getComments(),
  };
}

function getDescription (){
  const description = [
    '#love',
    '#keksagood',
    '#me',
    '#tbt',
    '#follow'
  ];
  const random = getRandomInt(1, 2);
  shuffle(description);
  return description.slice(0, random).join(' ');
}

function getComments() {
  const comments = [];
  for(let i = 1; i < getRandomInt(2,4); i++) {
    comments.push(getComment(i));
  }

  return comments;
}

const usedNumbers = new Set();

function getRandomUnique() {
  const val = Math.ceil(Math.random() * 100);
  if (usedNumbers.has(val)) {
    return getRandomUnique();
  } else {
    usedNumbers.add(val);
    return val;
  }
}

function getComment() {
  const userId = getRandomInt(1,6);
  return {
    id: getRandomUnique(),
    avatar: `img/avatar-${userId}.svg`,
    message: getMessage(),
    name: getName(),
  };
}

function getName(){
  const name = [
    'Иван',
    'Хуан',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
  ];
  return name[getRandomInt(0, name.length - 1)];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getMessage (){
  const message = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const random = getRandomInt(1, 2);
  shuffle(message);
  return message.slice(0, random).join(' ');
}

getPhotos();
