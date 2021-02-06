import {
  setMeetingData,
  getMeetingData,
  days,
  hours,
} from './storage';
import {
  table,
} from './index';

function createTable(parent = table, cols = days, rows = hours) {
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
    cell.addEventListener('click', function sendThisCellToHandle() {
      // eslint-disable-next-line no-use-before-define
      handleDeleteModal(this);
    });
  });
}

function refreshTable(localTable = table, localDays = days, localHours = hours) {
  table.innerHTML = '';
  createTable(localTable, localDays, localHours);
  addMeetingToCalendar();
}

const findEventId = (item, day, time) => item.day === day && item.time === time;

function deleteMeeting(data) {
  const { id } = data;
  const day = id.split('-')[0];
  const time = id.split('-')[1];
  const store = getMeetingData();
  const index = store.findIndex((item) => findEventId(item, day, time));
  store.splice(index, 1);
  setMeetingData(store);
  refreshTable();
}

function handleDeleteModal(data) {
  const answear = confirm(`Are you sure you want to delete ${data.textContent} event?`);
  // modal.style.display = 'flex';
  // showModal(data.textContent);
  if (answear) {
    deleteMeeting(data);
  }
}

export {
  createTable,
  addMeetingToCalendar,
  refreshTable,
  deleteMeeting,
  handleDeleteModal,
};
