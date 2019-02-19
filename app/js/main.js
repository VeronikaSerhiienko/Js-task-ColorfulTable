'use strict';

let tdArray = document.querySelectorAll('td');
console.log(tdArray);
tdArray.forEach(function(tdItem) {
  tdItem.classList.add('blue-bg');
  console.log(tdItem, tdItem.classList);
});
