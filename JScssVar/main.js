const spacing = document.querySelector('#spacing ');
const blur = document.querySelector('#blur');
const baseColor = document.querySelector('#base');

function ChangeCss() {
  //heading
  document.querySelector('.hl').style.color = baseColor.value;
  //img
  document.querySelector('img').style.cssText = `filter : blur(${blur.value});
  padding: ${spacing.value}px ;
  background-color: ${baseColor.value};`

}

setInterval(ChangeCss, 1000);