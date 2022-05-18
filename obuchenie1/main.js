'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  div = document.createElement('div');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style = 'background-color: blue; width: 300px';

btns[2].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach((item) => {
  item.style.backgroundColor = 'blue';
});

div.classList.add('black');

document.body.append(div);

// hearts[0].replaceWith(circles[0]);

for (let i = 0; i < btns.length; i++) {
  btns[i].style.backgroundColor = 'green';
}

// div.textContent = 'Hello';
div.innerHTML = '<h4>HELLO World</h4>';
btns[2].textContent = 'You Tube';

// hearts[1].replaceWith(btns[2]);

div.insertAdjacentHTML('afterbegin', '<h4>gjgjgj</h4>');
