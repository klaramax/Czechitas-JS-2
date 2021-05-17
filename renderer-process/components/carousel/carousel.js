import { NewsArticle } from '../news-article/news-article.js';

export class Carousel {

    constructor(news) {
        this.header = document.querySelector('div.header-news__container');
        this.articles = news;
        this.carouselItemStart = 0;
        this.carouselItemCount = 4;
        this.buttonLeft = document.querySelector('#carousel-button-left');
        this.buttonRight = document.querySelector('#carousel-button-right');
    }

    checkButtonsVisibility() {
        this.buttonLeft.hidden = (this.carouselItemStart === 0);
        this.buttonRight.hidden = (this.carouselItemStart >= (this.articles.length - this.carouselItemCount));
      }

    populateNewsCarousel(news) {
        this.articles = news;
        this.header.innerHTML = "";
        for(let i = this.carouselItemStart; i < (this.carouselItemStart + this.carouselItemCount); i ++) {
            const newsValue = news[i];
            const newsArticle = new NewsArticle();
            const newsDiv = newsArticle.createDivForNews(newsValue);
            this.header.appendChild(newsDiv);
        }
        this.checkButtonsVisibility();
    }

}
