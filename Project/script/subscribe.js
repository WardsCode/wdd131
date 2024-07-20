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
        // Increment the subscriber count in localStorage
        let subscriberCount = localStorage.getItem('subscriberCount') || 0;
        subscriberCount++;
        localStorage.setItem('subscriberCount', subscriberCount);

        // Redirect to the thank you page
        window.location.href = 'thanks.html';
    });
});
