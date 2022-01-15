const body = document.createElement('body');

//------------------Start Changes background color
const colors = ['red', 'green', 'blue', 'yellow', 'violet', 'purple'];
const btnChangeBackground = document.createElement('button');

btnChangeBackground.innerHTML = "Click Me!";
document.body.appendChild(btnChangeBackground);

document.body.style.backgroundColor = 'pink';
btnChangeBackground.addEventListener('click', changeBackground);

function changeBackground(){
  const colorIndex = parseInt(Math.random()*colors.length)
  document.body.style.backgroundColor = colors[colorIndex]
};
//------------------End Changes background color

//------------------Start Message Passing
const divMessagePass = document.createElement('div');
const h1MessagePass = document.createElement('h1');
const h2MessagePass = document.createElement('h2');
const txtboxMessagePass = document.createElement('input');
const btnMessagePass = document.createElement('button');
const txtNewMessage = document.createElement('p');

document.body.appendChild(divMessagePass);
divMessagePass.style.marginTop = '10px';
divMessagePass.style.backgroundColor = 'white';
divMessagePass.style.width = '300px';
divMessagePass.style.height = '300px';
divMessagePass.style.display = 'flex';
divMessagePass.style.flexDirection = 'column';
h1MessagePass.innerHTML ='A Message You Would Like To Pass';
divMessagePass.appendChild(h1MessagePass);
divMessagePass.appendChild(txtboxMessagePass);
btnMessagePass.innerHTML = 'Submit';
btnMessagePass.addEventListener('click', displayMessage);
divMessagePass.appendChild(btnMessagePass);
h2MessagePass.innerHTML = 'Last Message Delivered';
divMessagePass.appendChild(h2MessagePass);

function displayMessage(){
  if (txtboxMessagePass.value == '') {
    alert('No Message To Send!');
  } else {
    txtNewMessage.innerHTML = txtboxMessagePass.value;
    txtboxMessagePass.value = '';
    divMessagePass.appendChild(txtNewMessage);
  }
}
//------------------End Message Passing

//------------------Start Counter
const divCounter = document.createElement('div');
const h1Counter = document.createElement('h1');
const txtCount = document.createElement('p');
const btnCountDown = document.createElement('button');
const btnCountUp = document.createElement('button');

document.body.appendChild(divCounter);
divCounter.style.marginTop = '10px';
divCounter.style.backgroundColor = 'white';
divCounter.style.width = '300px';
divCounter.style.height = '300px';
divCounter.style.display = 'flex';
divCounter.style.flexDirection = 'column';
h1Counter.innerHTML ='COUNTER';
divCounter.appendChild(h1Counter);
txtCount.value = 0;
txtCount.innerHTML = txtCount.value;
divCounter.appendChild(txtCount);
btnCountDown.innerHTML = 'Lower Count';
btnCountDown.addEventListener('click', lowerCount);
divCounter.appendChild(btnCountDown);
btnCountUp.innerHTML = 'Add Count';
btnCountUp.addEventListener('click', addCount);
divCounter.appendChild(btnCountUp);



function lowerCount(){
  txtCount.value = txtCount.value - 1;
  txtCount.innerHTML = txtCount.value;

  if(txtCount.value < 0) {
  txtCount.style.color = 'red';
  } else if(txtCount.value > 0) {
    txtCount.style.color = 'green';
  } else {
    txtCount.style.color = 'black';
  }
};

function addCount(){
  txtCount.value = txtCount.value + 1;
  txtCount.innerHTML = txtCount.value;
  if(txtCount.value > 0) {
    txtCount.style.color = 'green';
  } else if (txtCount.value < 0) {
    txtCount.style.color = 'red';
  } else {
    txtCount.style.color = 'black';
  }
}
//------------------End Counter

//------------------Start Background Image Selector
document.body.style.backgroundImage = 'url(https://picsum.photos/600/600)';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center center';
//------------------End Background Image Selector



