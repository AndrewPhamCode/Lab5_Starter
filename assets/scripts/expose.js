// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector('#horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', () => {
    const val = hornSelect.value;
    hornImage.src = `assets/images/${val}.svg`;
    hornAudio.src = `assets/audio/${val}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const vol = parseInt(volumeSlider.value);
    hornAudio.volume = vol / 100;

    if (vol === 0)      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    else if (vol < 33)  volumeIcon.src = 'assets/icons/volume-level-1.svg';
    else if (vol < 67)  volumeIcon.src = 'assets/icons/volume-level-2.svg';
    else                volumeIcon.src = 'assets/icons/volume-level-3.svg';
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}