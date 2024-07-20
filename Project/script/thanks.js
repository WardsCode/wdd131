document.addEventListener('DOMContentLoaded', () => {
    const subscriberCount = localStorage.getItem('subscriberCount') || 0;
    document.getElementById('subscriberCount').textContent = subscriberCount;
});
