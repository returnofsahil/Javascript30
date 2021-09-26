const panel = document.querySelectorAll('.panel');

panel.forEach((item) => {
  item.addEventListener('mouseover', toggleOpen);
})

function toggleOpen() {
  console.log('yo');
  this.classList.toggle('open-active');
}