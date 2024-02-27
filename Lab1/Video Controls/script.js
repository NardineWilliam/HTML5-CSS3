document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const playButton = document.getElementById("playButton");
  const seekBar = document.getElementById("seekBar");
  const muteButton = document.getElementById("muteButton");
  const volumeBar = document.getElementById("volumeBar");
  const currentTimeDisplay = document.getElementById("currentTime");
  const durationDisplay = document.getElementById("duration");

  // Play button
  playButton.addEventListener("click", function () {
    if (video.paused || video.ended) {
      video.play();
      playButton.innerHTML = "Pause";
    } else {
      video.pause();
      playButton.innerHTML = "Play";
    }
  });

  // Timeupdate
  video.addEventListener("timeupdate", function () {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
    currentTimeDisplay.textContent = formatTime(video.currentTime);
  });

  // seekBar
  seekBar.addEventListener("input", function () {
    const value = (seekBar.value * video.duration) / 100;
    video.currentTime = value;
  });

  // Mute button
  muteButton.addEventListener("click", function () {
    video.muted = !video.muted;
    muteButton.innerHTML = video.muted ? "Unmute" : "Mute";
  });

  //volume Bar
  volumeBar.addEventListener("input", function () {
    video.volume = volumeBar.value / 100;
  });

  //video duration
  video.addEventListener("loadedmetadata", function () {
    durationDisplay.textContent = formatTime(video.duration);
  });

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  // Speed
  speedButton.addEventListener("click", function () {
    const selectedSpeed = speedSelect.value;
    video.playbackRate = parseFloat(selectedSpeed);
  });
});
