document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', parseInt(localStorage.getItem('reviewCount')) + 1);
    } else {
        localStorage.setItem('reviewCount', 1);
    }

    document.getElementById('reviewCounter').textContent = localStorage.getItem('reviewCount');
});
