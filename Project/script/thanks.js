document.addEventListener('DOMContentLoaded', () => {
    // Get the subscriber count from local storage or set it to 0 if not available
    let subscriberCount = localStorage.getItem('subscriberCount') || 0;
    
    // Increment the subscriber count
    subscriberCount++;
    
    // Update the local storage with the new subscriber count
    localStorage.setItem('subscriberCount', subscriberCount);
    
    // Display the subscriber count on the page
    document.getElementById('subscriberCount').textContent = subscriberCount;
    
    // Set the current year and last modified date in the footer
    const year = document.querySelector("#currentYear");
    const lastm = document.querySelector("#lastModified");
    const today = new Date();
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
    const date = new Date(document.lastModified);
    lastm.innerHTML = `<span class="highlight">${date}</span>`;
    
    // Toggle the navigation menu
    const mainnav = document.querySelector('.nav-links');
    const hambutton = document.querySelector('#menu');
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
});
