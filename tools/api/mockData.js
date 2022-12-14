const pictures = [
  {
    id: 1,
    url: "http://localhost:8080/picture_01.jpg",
    title: "mountain in sunshine light",
    authorId: 1,
    createdAt: 1589796642,
    editorChoice: true,
    rating: 0.98,
  },
  {
    id: 2,
    url: "http://localhost:8080/picture_02.jpg",
    title: "unreal mushroom",
    authorId: 1,
    createdAt: 1589963663,
    editorChoice: true,
    rating: 0.68,
  },
  {
    id: 3,
    url: "http://localhost:8080/picture_03.jpg",
    title: "water run",
    authorId: 2,
    createdAt: 1589796642,
    editorChoice: false,
    rating: 0.87,
  },
  {
    id: 4,
    url: "http://localhost:8080/picture_04.jpg",
    title: "winter lake",
    authorId: 2,
    createdAt: 1589963655,
    editorChoice: false,
    rating: 0.92,
  },
  {
    id: 5,
    url: "http://localhost:8080/picture_05.jpg",
    title: "beautifull butterfly",
    authorId: 1,
    createdAt: 1589796642,
    editorChoice: true,
    rating: 0.57,
  },
  {
    id: 6,
    url: "http://localhost:8080/picture_06.jpg",
    title: "norway village",
    authorId: 1,
    createdAt: 1589796642,
    editorChoice: true,
    rating: 0.88,
  },
  {
    id: 7,
    url: "http://localhost:8080/picture_07.jpg",
    title: "snow covered",
    authorId: 1,
    createdAt: 1589796642,
    editorChoice: false,
    rating: 0.73,
  },
];

const authors = [
  { id: 1, firstname: "Nicolas", lastname: "Fourré" },
  { id: 2, firstname: "Marc", lastname: "Snowfield" },
];

const comments = [
  {
    id: 1,
    text: "Cette image est juste magnifique",
    authorId: 1,
    imageId: 1,
    createdAt: 1590504612000,
  },
  {
    id: 2,
    text: "Oui superbe",
    authorId: 2,
    imageId: 1,
    createdAt: 1590663012000,
  },
  {
    id: 3,
    text: "So beautifull",
    authorId: 2,
    imageId: 1,
    createdAt: 1622659452000,
  },
];

const newPicture = {
  id: null,
  url: "",
  title: "",
  authorId: null,
};

const newComment = {
  id: null,
  text: "",
  authorId: null,
  imageId: null,
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newPicture,
  pictures,
  authors,
  comments,
};