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

// debugger;
// const openModalButton = document.querySelector('#open-modal');
//
// openModalButton.addEventListener('click', () => {
//     const template = document.querySelector('#modal-template');
//     const modal = template.content.cloneNode(true);
//     const closeAction = () => {
//         const child = document.querySelector('section.modal-container');
//         document.body.removeChild(child);
//     }
//
//     modal.querySelector('#close-modal').addEventListener('click', closeAction);
//     modal.querySelector('#cancel-button').addEventListener('click', closeAction);
//     modal.querySelector('#save-button').addEventListener('click', () => {
//         const formRef = document.querySelector('#modal-form');
//         const formData = new FormData(formRef);
//         const isHoliday = formData.get('isHoliday') === 'on';
//     });
//     document.body.appendChild(modal);
// });

// last version
// const openModalButton = document.querySelector('#open-modal');
// openModalButton.addEventListener('click', () => {
//     showDayModal().then((result) => console.log(result));
// });
// function showDayModal() {
//     const promiseResult = new Promise((resolve, reject) => {
//         const template = document.querySelector('#modal-template');
//         const modal = template.content.cloneNode(true);
//         const closeAction = () => {
//             const child = document.querySelector('section.modal-container');
//             document.body.removeChild(child);
//             resolve(null);
//         };
//         modal.querySelector('#close-modal').addEventListener('click', closeAction);
//         modal.querySelector('#cancel-button').addEventListener('click', closeAction);
//         modal.querySelector('#save-button').addEventListener('click', () => {
//             const formRef = document.querySelector('#modal-form');
//             const formData = new FormData(formRef);
//             const isHoliday = formData.get('isHolidayControl') === 'on';
//             resolve('ahoj!!!!!');
//         });
//         document.body.appendChild(modal);
//     });
//     return promiseResult;
// }
//
// const modalContainer = document.querySelector('.modal-container');
//
//
//
createDayDivs();

//

function showDayModal() {
    const template = document.querySelector('#modal-template');
    const modal = template.content.cloneNode(true);
    const closeAction = () => {
        const child = document.querySelector('section.modal-container');
        document.body.removeChild(child);
    };
    modal.querySelector('#close-modal').addEventListener('click', closeAction);
    const cancelButton = modal.querySelector('#cancel-button');
    cancelButton.addEventListener('click', closeAction);
    modal.querySelector('#save-button').addEventListener('click', () => {
        const formRef = document.querySelector('#modal-form');
        const formData = new FormData(formRef);
        const isHoliday = formData.get('isHolidayControl') === 'on';
    });
    document.body.appendChild(modal);

    fetch('http://localhost:3000/contacts')
        .then(serverResponse => serverResponse.text())
        .then(responseText => {
            const data = JSON.parse(responseText);
            console.log(data);
            const select = document.querySelector('#eventAttendees');

            data.forEach(it => {
                const option = document.createElement('option');
                option.setAttribute('value', it.id);
                option.innerText = `${it.first_name} ${it.last_name}`;
                select.appendChild(option);
            });
            // for (let i = 1; i < data.length; i++) {
            //     const option = document.createElement('option');
            //     option.setAttribute('value', data.id);
            //     option.innerText = `${data[i].first_name} ${data[i].last_name}`;
            //     select.appendChild(option);
            // }
            const genderCheckBox = document.getElementById('limitAttendeesByGender');
            genderCheckBox.addEventListener('change', (event) => {
                    const genderSelectRow = document.getElementById('genderSelectRow');
                    if (event.target.checked) {
                    genderSelectRow.classList.remove('hidden');console.log('checked')}
                    else {genderSelectRow.classList.add('hidden');;console.log('removed')};
                });
        });
}

window.showModal = showDayModal;

// const dataPromise2 = fetch('http://localhost:3000/contacts');

// fetch('http://localhost:3000/contacts');
// fetch('http://localhost:3000/contacts')
// dataPromise2

// id
// first_name
// last_name
// gender
// ziskat referenci na select s id eventAttendees
// vytvorit novy element option
// <option value="id"></option>
// option innerText first_name + last_name
// option.setAttribute('value', ...);
// option.innerText = firstname + lastnme;
// vlozit option do selectu
// })
