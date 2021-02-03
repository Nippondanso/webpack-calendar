import { meetingData, hours, days } from './storage';
import './css/style.css'


let table = document.querySelector('.tbody');
let btnNewEvent = document.querySelector("#btn-new-event");
let selectPeople = document.querySelector("#calendar-select-people");

let eventName = document.querySelector("#name-input");
let participantName = document.querySelector("#participants-select");
let day = document.querySelector("#day-select");
let time = document.querySelector("#time-select");
let btnSubmit = document.querySelector("#btn-event-submit");



btnNewEvent.addEventListener("click", () => window.open('./createEvent.html', '_self'));
selectPeople.addEventListener("change", () => filteredCalendar(selectPeople.value, meetingData));

// btnSubmit.addEventListener("click", () => addNewEventToStorage(new EventItem()));
btnSubmit.addEventListener("click", () => tempFunc());

//#region реализовано и работает


// Создание пустой таблицы
function createTable(parent, cols, rows) {
    for (let i = 0; i < rows.length; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols.length; j++) {
            const td = document.createElement('td');
            td.id = `${cols[j]}-${rows[i]}`
            // td.classList.add(`${cols[j]}-${rows[i]}`)
            if (j == 0) {
                let text = document.createTextNode(`${rows[i]}:00`)
                td.appendChild(text);
            }
            tr.appendChild(td);
        }

        parent.appendChild(tr);
    }

}

// Отрисовка всех митингов
function addMeetingInCalendar(meetingData) {
    meetingData.forEach(element => {
        let cell = document.querySelector(`#${element.day}-${element.time}`);
        const text = document.createTextNode(`${element.name}`)
        cell.appendChild(text);
        cell.classList.add("event")
        cell.addEventListener("click", function () {
            console.log(this);
        })
    });
}


//отрисовка фильтрованных миттингов
function filteredCalendar(filterParam, meetingData = meetingData) {
    table.innerHTML = '';
    createTable(table, days, hours);

    if (filterParam == '*') {
        addMeetingInCalendar(meetingData);
    } else {


        let filteredMeetingData = meetingData.filter(item => {
            return item.members.includes(filterParam)
        })

        filteredMeetingData.forEach(element => {
            let cell = document.querySelector(`#${element.day}-${element.time}`);
            const text = document.createTextNode(`${element.name}`)
            cell.appendChild(text);
            cell.classList.add("event")
            cell.addEventListener("click", function () {
                console.log(this);
            })
        });
    }
}

//#endregion реализовано и работает

//#region проверить и дореализовать

// {
//     name: "Retrospective",
//     time: "17",
//     day: "Wed",
//     members: ["Maria"]
// }

// `#${element.day}-${element.time}`

function collectionToArr(htmlCollection) {
    let resultArr = [];
    for (let i = 0; i < htmlCollection.length; i++) {
        resultArr.push(htmlCollection[i].text)

    }
    return resultArr
}


function EventItem() {
    this.name = eventName.value;
    this.time = time.value;
    this.day = day.value;
    this.members = collectionToArr(participantName.selectedOptions);
}

// добавление эелемента в массив
function addNewEventToStorage(newItem) {
    let filteredStorage = meetingData.filter(item => {
        return (item.day.includes(newItem.day) && item.time.includes(newItem.time))
    })

    if (filteredStorage.length == 0) {
        meetingData.push(newItem);
    } else {
        alert("Failed to create an event. Time slot is already booked.")
    }
}

let tempFunc = () => {
    addNewEventToStorage(new EventItem())
    table.innerHTML = "";
    createTable(table, days, hours);
    addMeetingInCalendar(meetingData);
}

//#endregion

// Вызовы методов

createTable(table, days, hours);
addMeetingInCalendar(meetingData);