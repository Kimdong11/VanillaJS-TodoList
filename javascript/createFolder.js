const modalContaienr = document.querySelector('.modal__container');
const closeBtn = document.querySelector('.close__btn');
const addBtn = document.querySelector('.add__folder');
const createFolderBtn = document.querySelector('.create__folder');
const titlte = document.getElementById('title');
const color = document.getElementById('color');
const folderContainer = document.querySelector('.folder__conatainer');
const subFolderConatainer = document.querySelector('.sub__folder__container');

const HIDDEN = 'hidden';

const closeModal = () => {
    modalContaienr.classList.add(HIDDEN);
};

const openModal = () => {
    modalContaienr.classList.remove(HIDDEN);
};

const onClickCreateBtn = () => {
    const title = titlte.value;
    const selectedColor = color.value;
    closeModal();
    if (title === '' && color === '') {
        createFolder(title, selectedColor);
    } else {
        createFolder('newFolder', selectedColor);
    }
};

const createFolder = (title, color) => {
    const countFolder = subFolderConatainer.childElementCount;
    const folder = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    folder.classList.add('folder');
    h2.innerText = title;
    img.src = '../folder-icon.png';
    folder.appendChild(img);
    folder.appendChild(h2);
    subFolderConatainer.appendChild(folder);
};

const onClickCloseBtn = () => {
    closeModal();
};

const onKeyDown = (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
};

const onClickAddBtn = () => {
    openModal();
};

document.addEventListener('keydown', onKeyDown);
//modalContaienr.addEventListener('click', onClickCloseBtn);
closeBtn.addEventListener('click', onClickCloseBtn);
addBtn.addEventListener('click', onClickAddBtn);
createFolderBtn.addEventListener('click', onClickCreateBtn);
