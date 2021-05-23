export class Day extends HTMLElement {
    constructor(date) {
        super();
        this.innerHTML = `<div id="day-number"></div>`;
        this.date = date;
        this.number = date.getDate();
        this.querySelector('#day-number').innerText = this.number;
        this.addEventListener('click', this.handleClickEvent);
    }

    getDayName() {
        switch(this.date.getDay()) {
            case 0:
                return 'nedele';
            case 1:
                return 'pondeli';
            case 2:
                return 'utery';
            case 3:
                return 'streda';
            case 4:
                return 'ctvrtek';
            case 5:
                return 'patek';
            case 6:
                return 'sobota';
        }
    }

    handleClickEvent() {
        alert('Dnes je ' + this.getDayName())
    }
}

customElements.define('app-day', Day)
