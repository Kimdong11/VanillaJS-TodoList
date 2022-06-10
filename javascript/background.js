const container = document.querySelector('.container');
const ImageArray = ['Red.jpg', 'orange.jpg', 'yellow.jpg', 'green.jpg', 'blue.jpg', 'navy.jpg', 'purple.jpg'];

const date = new Date();
const index = date.getDay();

container.style.backgroundImage = `url(../background/${ImageArray[index]})`;
