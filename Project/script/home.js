const year = document.querySelector("#currentYear");
const lastm = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const date = new Date(document.lastModified);
lastm.innerHTML = `<span class="highlight">${date}</span>`;

const mainnav = document.querySelector('.nav-links');
const hambutton = document.querySelector('#menu');

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
