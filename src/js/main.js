'use strict';


const classes = ['heart', 'atom', 'grass', 'paw'];
const wrapper = document.querySelector('.table-block');
wrapper.addEventListener('mouseover', (event) => {
  makeHover(event);
});
wrapper.addEventListener('mouseout', () => {
  document.querySelectorAll('.white-bg').forEach(element => element.classList.remove('white-bg'));
});
const tdArray = wrapper.querySelectorAll('td');
const sizeX = wrapper.rows.length;
const sizeY = wrapper.rows[0].cells.length;
const randomIntegerGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const fillInTheTable = () => {
    tdArray.forEach(function(tdItem) {

      const num = randomIntegerGenerator(0, 3);
      tdItem.classList.add(classes[num]);
      tdItem.dataset.image = classes[num];
    });
};

fillInTheTable();

const makeHover = (event) => {
  const target = event.target;
  if (target.tagName === 'TD') {
      target.classList.add('white-bg');
      const x = target.cellIndex;
      const y = target.parentNode.rowIndex;
      makeHoverByClass(x, y, target);
  }
};

const makeHoverByClass = (x, y, currentCell) => {
  if ((x - 1) >= 0) {
    const nextCell = wrapper.rows[y].cells[x - 1];
    if (currentCell.getAttribute('data-image') === nextCell.getAttribute('data-image') && !nextCell.classList.contains('white-bg')) {
      nextCell.classList.add('white-bg');
      makeHoverByClass(x - 1, y, nextCell);
    }
  }

  if ((y - 1) >= 0) {
    const nextCell = wrapper.rows[y - 1].cells[x];
    if (currentCell.getAttribute('data-image') === nextCell.getAttribute('data-image') && !nextCell.classList.contains('white-bg')) {
      nextCell.classList.add('white-bg');
      makeHoverByClass(x, y - 1, nextCell);
    }
  }

  if ((y + 1) < sizeY) {
    const nextCell = wrapper.rows[y + 1].cells[x];
    if (currentCell.getAttribute('data-image') === nextCell.getAttribute('data-image') && !nextCell.classList.contains('white-bg')) {
      nextCell.classList.add('white-bg');
      makeHoverByClass(x, y + 1, nextCell);
    }
  }

  if ((x + 1) < sizeX) {
    const nextCell = wrapper.rows[y].cells[x + 1];
    if (currentCell.getAttribute('data-image') === nextCell.getAttribute('data-image') && !nextCell.classList.contains('white-bg')) {
      nextCell.classList.add('white-bg');
      makeHoverByClass(x + 1, y, nextCell);
    }
  }
};



