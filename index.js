const shareBtn = document.querySelector('.preview-share');
const media = document.querySelector('.preview-controls');

const displayMedia = () => {
    shareBtn.classList.add('active');
    media.classList.remove('hide-media');
    media.classList.add('display-media'); 
};

const hideMedia = () => {
    media.classList.remove('display-media');
    media.classList.add('hide-media');
    shareBtn.classList.remove('active');
};

shareBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!shareBtn.classList.contains('active')) {
        displayMedia();
    } else {
        hideMedia();
    }
})