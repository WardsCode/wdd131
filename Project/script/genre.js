document.addEventListener("DOMContentLoaded", () => {
    const mainnav = document.querySelector('.nav-links');
    const hambutton = document.querySelector('#menu');

    // Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const comics = [
        { title: "Our Last Night", genre: "drama", summary: "Two strangers, one night, What could go wrong? They will fight for their love before the night is over", imageUrl: "images/drama.webp", link: "" },
        { title: "Between Friends and Homework", genre: "comedy", summary: "Being the youngest amount your class isn't easy, yet Richard will find a way to always meet expectations", imageUrl: "images/comedy.webp", link: "" },
        { title: "The Emperor's Legacy", genre: "fantasy", summary: "Rakash'ha will be the next to the throne but a war is coming and she need to find the strenght to show all she is the next Emperor", imageUrl: "images/fantasy.webp", link: "" },
        { title: "Evil Pursuit", genre: "horror", summary: "Vanessa finds a extrange book and when she reads it outloud, summons a nightmare like creature that will hunt her even in her dreams", imageUrl: "images/horror.webp", link: "" },
        { title: "Last Wish", genre: "romance", summary: "Danielle is turning 30 this year and the only thing she wants is to fell in love, but the wish comes true! however, it is too good to be true", imageUrl: "images/romance.webp", link: "" },
        { title: "Heavenly Fighters", genre: "sci-fi", summary: "A world full of anger will face justice. A group of super heroes will show the capital city  what they are made of", imageUrl: "images/comicf.webp", link: ""},
        { title: "Commery", genre: "comedy", summary: "Manuel is back with his funny tales! Follow him into a world full of imagination and fun", imageUrl: "images/comich.webp", link: ""},
        { title: "Draculley", genre: "fantasy", summary: "Victoria Draculley has come for revenge. She will be a new student in highschool, but she knows more than what she say", imageUrl: "images/comica.webp", link: ""},
        { title: "Sobrenatural School", genre: "sci-fi", summary: "Sobrenatural Highschool is full of new sorprices. Follow the story of our students into a world full fo misteries", imageUrl: "images/comicb.webp", link: ""},
        { title: "Between the Roses", genre: "romance", summary: "A new love has born. Mario and Christina will face new challenges in this new season", imageUrl: "images/comicc.webp", link: ""},
        { title: "The Wards", genre: "drama", summary: "The Wards family has been hunters of so long, now after a new born, they want to break links and start a new age", imageUrl: "images/comicd.webp", link: ""},
        { title: "Pink as Magical Flowers", genre: "fantasy", summary: "Pink is new at the magic school and she wants to be friend of everyone, however, life is not that easy, specially when the most popular boy falls in love accidentally of her", imageUrl: "images/comicg.webp", link: ""}
    ];

    function displayComics(filter) {
        const comicGrid = document.getElementById('comic-grid');
        comicGrid.innerHTML = '';

        const filteredComics = filter === 'all' ? comics : comics.filter(comic => comic.genre === filter);

        filteredComics.forEach(comic => {
            const comicCard = document.createElement('div');
            comicCard.classList.add('comic-card');

            comicCard.innerHTML = `
                <a href="${comic.link}">
                    <img src="${comic.imageUrl}" alt="${comic.title}">
                    <h3>${comic.title}</h3>
                    <p>${comic.summary}</p>
                </a>
            `;

            comicGrid.appendChild(comicCard);
        });
    }

    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const genre = button.getAttribute('data-genre');
            displayComics(genre);
        });
    });

    displayComics('all');

    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
});
