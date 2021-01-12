//Function to select elements
const selectElement = (s) => document.querySelector(s);

//Opening our Menu on click
selectElement(s, '.open').addEventListener('click', () => {
selectElement(s, '.navigation-list').classList.add('active');
});

//Closing our Menu on click
selectElement(s, '.close').addEventListener('click', () => {
    selectElement(s, '.navigation-list').classList.remove(tokens:'active');
   });