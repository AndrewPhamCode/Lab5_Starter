// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore img');
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const synthesizer = window.speechSynthesis;

  function populateVoices() {
    const voices = synthesizer.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const voiceOption = document.createElement('option');
      voiceOption.value = index;
      voiceOption.textContent = voice.name;
      voiceSelect.appendChild(voiceOption);
    });
  }

  populateVoices();

  if (synthesizer.onvoiceschanged !== undefined) {
    synthesizer.addEventListener('voiceschanged', populateVoices);
  }

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoice = synthesizer.getVoices()[voiceSelect.value];
    const closeFace = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', closeFace);
    utterance.addEventListener('error', closeFace);

    synthesizer.speak(utterance);
  });
}