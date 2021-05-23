import {Carousel} from './components/carousel/carousel.js';
import {Day} from './components/day/day.js';


const mainContent = document.querySelector('.main-content');
const dataPromise = fetch('http://localhost:3000/news.json');
const carousel = document.querySelector('app-carousel');
let articles;

dataPromise
.then(serverResponse => serverResponse.text())
.then(responseText => {
    const data = JSON.parse(responseText);
    articles = data.articles;
    console.log(data);
    carousel.populateNewsCarousel(articles)
});

carousel.buttonLeft.addEventListener('click', () => {
    carousel.carouselItemStart--;
    carousel.populateNewsCarousel(articles);
});

carousel.buttonRight.addEventListener('click', () => {
    carousel.carouselItemStart++;
    carousel.populateNewsCarousel(articles);
});

const currentDate = new Date();
const maxDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

function createDayDivs() {
    for (let i = 1; i <= maxDate; i++) {
        const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        mainContent.appendChild(new Day(dayDate));
    }
}

// const buttonOpenModal = document.getElementById('open-modal');
// const modalContainer = document.querySelector('.modal-container');
// buttonOpenModal.addEventListener('click', () => {
//     modalContainer.hidden = false;
// });

createDayDivs();
