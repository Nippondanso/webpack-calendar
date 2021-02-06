import {
  initLocalStorage,
  getMeetingData,
} from './storage';
import {
  addMeetingToCalendar,
  refreshTable,
  handleDeleteModal,
  createTable,
} from './tableUtils';
import './css/styles.css';

export const table = document.querySelector('.tbody');
const btnNewEvent = document.querySelector('#btn-new-event');
const selectPeople = document.querySelector('#calendar-select-people');

document.addEventListener('DOMContentLoaded', () => {
  initLocalStorage();
  refreshTable();
});

function filteredCalendar(filterParam, meetingData = getMeetingData()) {
  table.innerHTML = '';
  createTable();

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
        handleDeleteModal(this);
      });
    });
  }
}

btnNewEvent.addEventListener('click', () => window.open('./createEvent.html', '_self'));
selectPeople.addEventListener('change', () => filteredCalendar(selectPeople.value));
