const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalId = null;
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
 
  intervalId = setInterval(() => {
     document.body.style.backgroundColor = randomColor()
  }, 1000)

  btnStart.setAttribute('disabled','true') 
}
function onBtnStopClick() {
  
  btnStart.removeAttribute('disabled')
  clearInterval(intervalId)
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
  return colors[randomIntegerFromInterval(0,colors.length)]
}
