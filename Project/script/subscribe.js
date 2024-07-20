document.addEventListener('DOMContentLoaded', () => {
    const mainnav = document.querySelector('.nav-links');
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const form = document.getElementById('subscribeForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let subscriberCount = localStorage.getItem('subscriberCount') || 0;
        subscriberCount++;
        localStorage.setItem('subscriberCount', subscriberCount);

        window.location.href = 'thanks.html';
    });
});


const year = document.querySelector("#currentYear");
const lastm = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const date = new Date(document.lastModified);
lastm.innerHTML = `<span class="highlight">${date}</span>`;
