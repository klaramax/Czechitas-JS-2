import {Carousel} from './components/carousel/carousel.js';

const mainContent = document.querySelector('.main-content');
const daysOfMonth = 31;
const dataPromise = fetch('http://localhost:3000/news.json');

const carousel = new Carousel();
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

function createDayDivs() {
    for (let i = 1; i <= daysOfMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('main-content__day');
        mainContent.appendChild(day);
        day.innerText = 'day ' + i;
    }
}

createDayDivs();
