// first card
const pCardAdd = document.querySelector('.pCard_add');
const pCardCard = document.querySelector('.pCard_card');
const pCardAddIcon = document.querySelector('.pCard_add i');

pCardAdd.addEventListener('click', () => {
  pCardCard.classList.toggle('pCard_on');
  pCardAddIcon.classList.toggle('fa-minus');
});

// second card
const pCardAdd2 = document.querySelector('.pCard_add2');
const pCardCard2 = document.querySelector('.pCard_card2');
const pCardAddIcon2 = document.querySelector('.pCard_add2 i');

pCardAdd2.addEventListener('click', () => {
  pCardCard2.classList.toggle('pCard_on');
  pCardAddIcon2.classList.toggle('fa-minus');
});

// third card
const pCardAdd3 = document.querySelector('.pCard_add3');
const pCardCard3 = document.querySelector('.pCard_card3');
const pCardAddIcon3 = document.querySelector('.pCard_add3 i');

pCardAdd3.addEventListener('click', () => {
  pCardCard3.classList.toggle('pCard_on');
  pCardAddIcon3.classList.toggle('fa-minus');
});
