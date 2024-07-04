



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
	templeName: "Asuncion Paraguay",
	location: "Asuncion, Paraguay",
	dedicated: "1997, December, 22",
	area: 16442,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"
},
{
	templeName: "Barranquilla, Colombia",
	location: "Barranquilla, Colombia",
	dedicated: "2021, December, 22",
	area: 1442,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
},
{
	templeName: "Baton, Luisiana",
	location: "Baton, Luisiana",
	dedicated: "2011, December, 2",
	area: 14332,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/3-a75beca22300a3263bd47fba03b5b0d1b5ca0753.jpeg"
}

];



const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});



document.addEventListener("DOMContentLoaded", () => {
	const mainElement = document.querySelector("main");
	const container = document.createElement("div");
	container.id = "container";
  
	const filterTemples = (filter) => {
	  container.innerHTML = '';
  
	  const filteredTemples = temples.filter(filter);
  
	  filteredTemples.forEach((temple) => {
		const templeCard = document.createElement("div");
		templeCard.classList.add("temple-card");
  
		const templeImage = document.createElement("img");
		templeImage.src = temple.imageUrl;
		templeImage.alt = temple.templeName;
		templeImage.loading = "lazy";
  
		const templeInfo = document.createElement("figcaption");
		templeInfo.innerHTML = `
		  <h3>${temple.templeName}</h3>
		  <p>Location: ${temple.location}</p>
		  <p>Dedicated: ${temple.dedicated}</p>
		  <p>Area: ${temple.area} sq ft</p>
		`;
  
		templeCard.appendChild(templeImage);
		templeCard.appendChild(templeInfo);
		container.appendChild(templeCard);
	  });
  
	  mainElement.appendChild(container);
	};
  
	const filters = {
	  home: () => true,
	  old: (temple) => new Date(temple.dedicated).getFullYear() < 1900,
	  new: (temple) => new Date(temple.dedicated).getFullYear() > 2000,
	  large: (temple) => temple.area > 90000,
	  small: (temple) => temple.area < 10000,
	};
  
	document.getElementById("home-link").addEventListener("click", () => filterTemples(filters.home));
	document.getElementById("old-link").addEventListener("click", () => filterTemples(filters.old));
	document.getElementById("new-link").addEventListener("click", () => filterTemples(filters.new));
	document.getElementById("large-link").addEventListener("click", () => filterTemples(filters.large));
	document.getElementById("small-link").addEventListener("click", () => filterTemples(filters.small));
  
	// Initial load
	filterTemples(filters.home);
  });
  
const year = document.querySelector("#currentYear");
const lastm = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const date = new Date(document.lastModified);
lastm.innerHTML = `<span class="highlight">${date}</span>`;

