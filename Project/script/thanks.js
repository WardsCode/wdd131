document.addEventListener('DOMContentLoaded', () => {
    let subscriberCount = localStorage.getItem('subscriberCount') || 0;    
    subscriberCount++;    
    localStorage.setItem('subscriberCount', subscriberCount);    
    document.getElementById('subscriberCount').textContent = subscriberCount;
    
});

const mainnav = document.querySelector('.nav-links');
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const year = document.querySelector("#currentYear");
const lastm = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const date = new Date(document.lastModified);
lastm.innerHTML = `<span class="highlight">${date}</span>`;
