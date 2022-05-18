'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style = 'background-color: blue; width: 300px';

btns[2].style.borderRadius = '100%';
