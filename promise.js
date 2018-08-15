function record() {

    navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
        });
}


// Main code

startButton = document.getElementById("start");
stopButton = document.getElementById("stop");

startButton.disabled = false;

startButton.onclick = function(){
    startButton.disabled = true;
    stopButton.disabled = false;
    record();
};

stopButton.onclick = function(){
    stopButton.disabled = true;
    startButton.disabled = false;
    alert("Stop");
};
