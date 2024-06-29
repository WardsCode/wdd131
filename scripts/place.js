
const year = document.querySelector("#currentYear");
const lastm = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const date = new Date(document.lastModified);
lastm.innerHTML = `<span class="highlight">${date}</span>`;


/**/

