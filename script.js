const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// function asynchronous prompt user to choose a mediastream and pass a video element and play

async function selectMediaStream(){
    try {
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject = mediaStream;
videoElement.onloadedmetadata = () => {
    videoElement.play();
};
    } catch(error){

    }
}

button.addEventListener('click', async () => {
// stop the button
button.disabled = true;
// start window in window
await videoElement.requestPictureInPicture();
button.disabled = false;
});

selectMediaStream();