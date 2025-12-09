function removeTransition(e) {
  // Solo nos interesa cuando termina la transición de 'transform'
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  // Busca el <audio> y el <div> con el data-key correspondiente a la tecla
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio || !key) return; // Si no existe, salimos

  key.classList.add('playing'); // Añade animación
  audio.currentTime = 0;        // Reinicia el audio
  audio.play();                 // Reproduce el sonido
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
