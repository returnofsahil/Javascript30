window.addEventListener('keydown', function (e) {
  const key = document.querySelector(`.key[data-key ='${e.key}']`);
  const audio = document.querySelector(`audio[data-key='${e.key}']`);
  if (!audio) {
    return
    // end function
  }
  audio.play();
  key.classList.add('playing');


  const keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    // console.log(key);
  })

  function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      return
    }
    // console.log(this);
    this.classList.remove('playing');

  }
})