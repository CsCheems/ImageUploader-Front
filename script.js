const socket = io('https://imageuploader-back-r46x.onrender.com/');
//const socket = io('https://image-uploader-back.vercel.app');


socket.on('imagen-actualizada', (dataUrl) => {
    document.getElementById('miImagen').src = dataUrl;
});