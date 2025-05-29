const socket = io('https://imageuploader-back-buqn.onrender.com');

socket.on('imagen-actualizada', (dataUrl) => {
    document.getElementById('miImagen').src = dataUrl;
});