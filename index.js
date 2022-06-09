const container = document.querySelector('.container');
const ImageArray = ['Red.jpg', 'orange.jpg', 'yellow.jpg', 'green.jpg', 'blue.jpg', 'navy.jpg', 'purple.jpg'];
const user = document.querySelector('.user');
const userName = document.querySelector('.user__name');
const input = document.querySelector('.user__name__input');

const HIDDEN = 'hidden';
const isIn = localStorage.getItem('user');

const date = new Date();
const index = date.getDay();

if (isIn !== '') {
    user.innerText = `Hello ${isIn}`;
    userName.innerText = `${isIn}`;
    user.classList.remove(HIDDEN);
    userName.classList.remove(HIDDEN);
    input.classList.add(HIDDEN);
} else {
    user.classList.add(HIDDEN);
    userName.classList.add(HIDDEN);
    input.classList.remove(HIDDEN);
}

const pressEnterKey = (e) => {
    const keyCode = e.keyCode;
    if (keyCode === 13) {
        localStorage.setItem('user', `${input.value}`);
    }
};

container.style.backgroundImage = `url(./background/${ImageArray[index]})`;

navigator.geolocation.getCurrentPosition(async (position) => {
    if (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const weatherData = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current&appid=c5932b21b8f7196c8f78ffbc47bd638b`
        );
        console.log(weatherData);
    }
});

document.addEventListener('keydown', pressEnterKey);
input.addEventListener('change', (e) => {
    console.log(e);
});
