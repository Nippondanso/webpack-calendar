import { meetingData, hours, days } from './storage';
import './css/style.css'


let table = document.querySelector('.tbody');

// Создание пустой таблицы

function createTable(parent, cols, rows) {
    for (let i = 0; i < rows.length; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols.length; j++) {
            const td = document.createElement('td');
            td.classList.add(`${cols[j]}-${rows[i]}`)
            if (j == 0) {
                let text = document.createTextNode(`${rows[i]}:00`)
                td.appendChild(text);
            }
            tr.appendChild(td);
        }

        parent.appendChild(tr);
    }

}



// Отрисовка митингов

function addMeetingInCalendar(meetingData) {
    meetingData.forEach(element => {
        let cell = document.querySelector(`.${element.day}-${element.time}`);
        const text = document.createTextNode(`${element.name}`)
        cell.appendChild(text);
        cell.classList.add("event")
        cell.addEventListener("click", function () {

        })
    });
}

//#region проверить и дореализовать

//отрисовка фильтрованного календаря
// function addMeetingInCalendar(meetingData, filterParam) {

//     let filteredMeetingData = meetingData.filter( item => {
//         return item.members.includes(filterParam)
//     })

//     filteredMeetingData.forEach(element => {
//         let cell = document.querySelector(`.${element.day}-${element.time}`);
//         const text = document.createTextNode(`${element.name}`)
//         cell.appendChild(text);
//         cell.classList.add("event")
//         cell.addEventListener("click", function () {

//         })
//     });
// }

//#endregion





// Вызовы методов

createTable(table, days, hours);
addMeetingInCalendar(meetingData);