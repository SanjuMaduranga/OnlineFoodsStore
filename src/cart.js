const cartItemSelect = document.querySelector('box');
const addButton = document.querySelector('btn'); 
const cartLocate = document.querySelector('cartItem');

addButton.addEventListener('click', transferElement);

function transferElement(){
    const clonedElement = cartItemSelect.cloneNode(true);
    cartLocate.appendChild(clonedElement);
}