const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button');

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
});
