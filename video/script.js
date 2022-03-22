
const video = document.querySelector('.video');
let videoPlay = false;

document.querySelector('.video-wrapper').addEventListener('click', () => {
    if (videoPlay) {
        video.pause();
        videoPlay = false;
    } else {
        video.play();
        videoPlay = true;
    }
});

document.querySelector('.button-play').addEventListener('click', () => {
    if (!videoPlay) {
        video.play();
        videoPlay = true;
        document.querySelector('.video-wrapper').classList.add('play');
    }
});

document.querySelector('.button-pause').addEventListener('click', () => {
    if (videoPlay) {
        video.pause();
        videoPlay = false;
        document.querySelector('.video-wrapper').classList.remove('play');
    }
});

document.querySelector('.button-restart').addEventListener('click', () => {
    video.currentTime = 0;
});

document.querySelector('.button-fullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen({ navigationUI: "hide" });
        document.querySelector('.video-buttons').classList.add('fullscreen');
    } 
});