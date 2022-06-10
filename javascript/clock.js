const clock = document.querySelector('.clock');

if (isIn !== null) {
    clock.classList.remove(HIDDEN);
    setInterval(() => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        clock.innerText = `${hours} : ${minutes} : ${seconds}`;
    }, 1000);
} else {
    clock.classList.add(HIDDEN);
}
