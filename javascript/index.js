const user = document.querySelector('.user');
const userName = document.querySelector('.user__name');
const input = document.querySelector('.user__name__input');
const label = document.querySelector('.label');
const underLine = document.querySelector('.under__line');

const HIDDEN = 'hidden';
const isIn = localStorage.getItem('user');

const pressEnterKey = (e) => {
    const keyCode = e.keyCode;
    if (keyCode === 13 && input.value !== '') {
        localStorage.setItem('user', `${input.value}`);
        window.location.reload();
    } else {
        underLine.classList.remove(HIDDEN);
        label.innerText = 'Write your name!';
    }
};

document.addEventListener('keydown', pressEnterKey);

if (isIn !== null) {
    user.innerText = `Hello ${isIn}`;
    userName.innerText = `${isIn}`;
    userName.classList.remove(HIDDEN);
    input.classList.add(HIDDEN);
    label.classList.add(HIDDEN);
} else {
    userName.classList.add(HIDDEN);
    input.classList.remove(HIDDEN);
    label.classList.remove(HIDDEN);
}
