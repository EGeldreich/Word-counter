/* SELECTORS & VARIABLES */

const wordsEl = document.querySelector('.stat__number--words');
const charactersEl = document.querySelector('.stat__number--characters');
const twitterEl = document.querySelector('.stat__number--twitter');
const facebookEl = document.querySelector('.stat__number--facebook');

const textareaEl = document.querySelector('.textarea');
const buttonEl = document.querySelector('.textarea__reset');

const twitterValue = +twitterEl.textContent;
const facebookValue = +facebookEl.textContent;

/* FUNCTIONS */

const updateStats = () => {
    const text = textareaEl.value.trim();
    const characters = text.length;

    const words = text ? text.split(/\s+/).length : 0;
    /*
    if (text) {
    const wordsArray = text.split(/\s+/); // On divise le texte en un tableau de mots
    words = wordsArray.length; // On compte le nombre de mots dans le tableau
    } else {
        words = 0; // Si le texte est vide, le nombre de mots est 0
    } 
    */

    charactersEl.textContent = characters;
    wordsEl.textContent = words;
    twitterEl.textContent = twitterValue - characters;
    facebookEl.textContent = facebookValue - characters;
}

const resetTextarea = () => {
    textareaEl.value = '';
    updateStats();
}
/* EVENTS */

textareaEl.addEventListener('input', updateStats);
buttonEl.addEventListener('click', resetTextarea);