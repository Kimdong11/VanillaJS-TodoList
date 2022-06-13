//해야할 일!

// 컨테이너를 구분해서 (폴더 3개씩) 로컬스토리지에 저장
// 폴더명을 불러올 때 오류발생
// 폴더 정보를 생각해야함

const modalContaienr = document.querySelector('.modal__container');
const closeBtn = document.querySelector('.close__btn');
const addBtn = document.querySelector('.add__folder');
const createFolderBtn = document.querySelector('.create__folder');
const titlte = document.getElementById('title');
const color = document.getElementById('color');
const folderContainer = document.querySelector('.folder__container');

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
    if (title !== '' && color !== '') {
        createFolderConatainer(title, selectedColor);
    } else {
        createFolderConatainer('newFolder', selectedColor);
    }
};

const createFolder = (title, color) => {
    const folder = document.createElement('div');
    folder.classList.add('folder');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    img.src = '../folder-icon.png';
    h2.innerText = title;
    folder.append(img);
    folder.append(h2);
    return folder;
};

const createFolderConatainer = (title, color) => {
    const subContainer = document.createElement('div');
    subContainer.classList.add('sub__folder__conatainer');
    subContainer.append(createFolder(title, color));
    folderContainer.append(subContainer);
    savingFolderInfo();
};

const savingFolderInfo = () => {
    const container = document.querySelectorAll('.sub__folder__conatainer');
    const folders = document.querySelectorAll('.folder');
    const count = { container: Array.from(container).length, folder: Array.from(folders).length };
    const folderInfo = { title: [] };
    folders.forEach((item) => {
        const h2 = item.querySelector('h2');
        const title = h2.innerText;
        folderInfo.title.push(`${title}`);
    });

    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('folder_info', JSON.stringify(folderInfo));
};

const displayFolders = () => {
    if (localStorage.getItem('count')) {
        const CONTAINER_NUM = JSON.parse(localStorage.getItem('count')).container;
        const FOLDER_NUM = JSON.parse(localStorage.getItem('count')).folder;
        for (let i = 0; i < CONTAINER_NUM; i++) {
            createFolderConatainer();
            for (let j = 0; j < FOLDER_NUM; j++) {
                const title = JSON.parse(localStorage.getItem('folder_info')).title;
                createFolder(title[j], 'black');
            }
        }
    } else {
        createFolderConatainer();
    }
};

displayFolders();

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
