window.addEventListener('click', function() {
  if (document.getElementsByTagName('audio').length > 0) {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    var myAudio = document.querySelector('audio');
    var source = audioCtx.createMediaElementSource(myAudio);

    var gainNode = audioCtx.createGain();

    // gain controls
    var gainCont = document.getElementById('gain');
    gainCont.addEventListener('mousemove', function() {
      gainNode.gain.value = this.value;
      console.log(this.value);
      document.getElementById('gain-label').innerHTML = this.value + " db";
    });

    // routing
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  };
});
