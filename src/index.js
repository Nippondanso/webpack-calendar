import { meetingData, hours, days, initLocalStorage, getMeetingData, setMeetingData } from './storage';
import './css/style.css'


let table = document.querySelector('.tbody');
let btnNewEvent = document.querySelector("#btn-new-event");
let selectPeople = document.querySelector("#calendar-select-people");

btnNewEvent.addEventListener("click", () => window.open('./createEvent.html', '_self'));
selectPeople.addEventListener("change", () => filteredCalendar(selectPeople.value));


//#region реализовано и работает


// Создание пустой таблицы
function createTable(parent, cols, rows) {
    for (let i = 0; i < rows.length; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols.length; j++) {
            const td = document.createElement('td');
            td.id = `${cols[j]}-${rows[i]}`
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
function addMeetingToCalendar() {

    let meetingsToCalendar = getMeetingData();

    meetingsToCalendar.forEach(element => {
        let cell = document.querySelector(`#${element.day}-${element.time}`);
        const text = document.createTextNode(`${element.name}`);
        cell.appendChild(text);
        cell.classList.add("event");
        cell.addEventListener("click", function () {
            // console.log(this);
            areYouSure(this);
        })
    });
}

//отрисовка фильтрованных миттингов
function filteredCalendar(filterParam, meetingData = getMeetingData()) {
    table.innerHTML = '';
    createTable(table, days, hours);

    if (filterParam == '*') {
        addMeetingToCalendar(meetingData);
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
                // console.log(this);
                areYouSure(this);
            })
        });
    }
}

function areYouSure(data) {

    let answear = confirm(`Are you sure you want to delete ${data.textContent} event?`)

    if (answear == true) {
        deleteMeeting(data)
    }
}

function refreshTable() {
    table.innerHTML = '';
    createTable(table, days, hours);
    addMeetingToCalendar();
}

//#endregion реализовано и работает

//#region проверить и дореализовать


function deleteMeeting(data) {

    let day = data.id.split('-')[0]
    let time = data.id.split('-')[1]

    let store = getMeetingData()
    let index = store.findIndex(item => item.day == day && item.time == time)
    store.splice(index, 1)
    setMeetingData(store);
    refreshTable();
}

//#endregion

// Вызовы методов


initLocalStorage()
createTable(table, days, hours);
addMeetingToCalendar();
