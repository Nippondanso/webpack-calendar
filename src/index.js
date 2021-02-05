import {
  hours, days, initLocalStorage, getMeetingData, setMeetingData,
} from './storage';
import './css/style.css';

const table = document.querySelector('.tbody');
const btnNewEvent = document.querySelector('#btn-new-event');
const selectPeople = document.querySelector('#calendar-select-people');

// #region реализовано и работает

// Создание пустой таблицы
function createTable(parent, cols, rows) {
  for (let i = 0; i < rows.length; i += 1) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols.length; j += 1) {
      const td = document.createElement('td');
      td.id = `${cols[j]}-${rows[i]}`;
      if (j === 0) {
        const text = document.createTextNode(`${rows[i]}:00`);
        td.appendChild(text);
      }
      tr.appendChild(td);
    }
    parent.appendChild(tr);
  }
}

function addMeetingToCalendar() {
  const meetingsToCalendar = getMeetingData();

  meetingsToCalendar.forEach((element) => {
    const cell = document.querySelector(`#${element.day}-${element.time}`);
    const text = document.createTextNode(`${element.name}`);
    cell.appendChild(text);
    cell.classList.add('event');
    cell.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      areYouSure(this);
    });
  });
}

function refreshTable() {
  table.innerHTML = '';
  createTable(table, days, hours);
  addMeetingToCalendar();
}

function deleteMeeting(data) {
  const day = data.id.split('-')[0];
  const time = data.id.split('-')[1];
  const store = getMeetingData();
  const index = store.findIndex((item) => item.day === day && item.time === time);
  store.splice(index, 1);
  setMeetingData(store);
  refreshTable();
}

function areYouSure(data) {
  const answear = confirm(`Are you sure you want to delete ${data.textContent} event?`);
  if (answear === true) {
    deleteMeeting(data);
  }
}

// Отрисовка всех митингов

// отрисовка фильтрованных миттингов
function filteredCalendar(filterParam, meetingData = getMeetingData()) {
  // table.innerHTML = '';
  // createTable(table, days, hours);
  refreshTable();

  if (filterParam === '*') {
    addMeetingToCalendar(meetingData);
  } else {
    const filteredMeetingData = meetingData.filter((item) => item.members.includes(filterParam));

    filteredMeetingData.forEach((element) => {
      const cell = document.querySelector(`#${element.day}-${element.time}`);
      const text = document.createTextNode(`${element.name}`);
      cell.appendChild(text);
      cell.classList.add('event');
      cell.addEventListener('click', () => {
        // console.log(this);
        areYouSure(this);
      });
    });
  }
}

// #endregion реализовано и работает

// #region проверить и дореализовать

// #endregion

// Вызовы методов

btnNewEvent.addEventListener('click', () => window.open('./createEvent.html', '_self'));
selectPeople.addEventListener('change', () => filteredCalendar(selectPeople.value));

initLocalStorage();
createTable(table, days, hours);
addMeetingToCalendar();
