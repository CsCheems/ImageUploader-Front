//const socket = io('https://imageuploader-back-buqn.onrender.com');
const socket = io('https://image-uploader-back.vercel.app');


socket.on('imagen-actualizada', (dataUrl) => {
    document.getElementById('miImagen').src = dataUrl;
});