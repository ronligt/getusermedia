function record() {
    if (navigator.mediaDevices) {
        console.log('we have media devices');
        navigator.mediaDevices.getUserMedia({audio: true, video: false})
        .then(function(stream) {
            var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            var source = audioCtx.createMediaStreamSource(stream);
            var processor = audioCtx.createScriptProcessor(1024, 1, 1);
            source.connect(processor);
            processor.connect(audioCtx.destination);
            processor.onaudioprocess = function(e) {
                console.log(e.inputBuffer);
                console.log(e.inputBuffer.getChannelData(0));
            };
        })
        .catch(function(err) {
            console.log('Error: ' + err);
        });
    } else {
        console.log('Nope, no media devices!');
    }
}
// Main code

startButton = document.getElementById("start");
stopButton = document.getElementById("stop");

startButton.disabled = false;

startButton.onclick = function(){
    startButton.disabled = true;
    stopButton.disabled = false;
    recording();
};

stopButton.onclick = function(){
    stopButton.disabled = true;
    startButton.disabled = false;
    alert("Stop");
};
