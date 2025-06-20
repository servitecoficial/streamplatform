// script.js

const videoElement = document.getElementById("video");
const screenElement = document.getElementById("screen");
const fullscreenBtn = document.getElementById("fullscreenBtn");

async function startStream() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    videoElement.srcObject = stream;
  } catch (error) {
    alert("Error al acceder a cámara o micrófono: " + error.message);
    console.error("Error al obtener medios:", error);
  }
}

async function startScreenShare() {
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true
    });
    screenElement.srcObject = screenStream;
  } catch (error) {
    console.error("Error al compartir pantalla:", error);
  }
}

fullscreenBtn.addEventListener("click", () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
});

startStream();
startScreenShare();
