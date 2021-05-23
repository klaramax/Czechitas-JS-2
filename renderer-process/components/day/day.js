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
                return 'neděle';
            case 1:
                return 'pondělí';
            case 2:
                return 'úterý';
            case 3:
                return 'středa';
            case 4:
                return 'čtvrtek';
            case 5:
                return 'pátek';
            case 6:
                return 'sobota';
        }
    }

    handleClickEvent() {
        alert('Datum: ' + this.getDayName() + ' ' + this.date.toLocaleDateString('cz'));
    }
}

customElements.define('app-day', Day);
