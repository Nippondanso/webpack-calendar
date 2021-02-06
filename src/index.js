import {
  initLocalStorage, getMeetingData,
} from './storage';
import {
  addMeetingToCalendar,
  refreshTable,
  handleDeleteModal,
} from './tableUtils';
import './css/style.css';

export const table = document.querySelector('.tbody');
const btnNewEvent = document.querySelector('#btn-new-event');
const selectPeople = document.querySelector('#calendar-select-people');

document.addEventListener('DOMContentLoaded', () => {
  initLocalStorage();
  refreshTable();
});

// let modalVsible = false;
// const modal = document.querySelector('#modal');

// #region реализовано и работает

// function showModal(massage) {
//   if (modalVsible === true) {
//     document.querySelector('#modal-text').innerHTML = massage;
//     modalVsible = true;
//   }
// }

function filteredCalendar(filterParam, meetingData = getMeetingData()) {
  refreshTable(table);

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

// #endregion реализовано и работает

// #region проверить и дореализовать

// #endregion

// Вызовы методов

btnNewEvent.addEventListener('click', () => window.open('./createEvent.html', '_self'));
selectPeople.addEventListener('change', () => filteredCalendar(selectPeople.value));
