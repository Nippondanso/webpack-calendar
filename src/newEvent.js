import {
  getMeetingData, setMeetingData,
} from './storage';
import './css/style.css';

const btnSubmit = document.querySelector('#btn-event-submit');
const btnCancel = document.querySelector('#btn-event-cancel');
const eventName = document.querySelector('#name-input');
const participantName = document.querySelector('#participants-select');
const day = document.querySelector('#day-select');
const time = document.querySelector('#time-select');

function addNewEventToStorage(newItem) {
  const filteredStorage = getMeetingData()
    .filter((item) => (item.day.includes(newItem.day) && item.time.includes(newItem.time)));

  if (eventName.value === '') {
    alert("Please fill 'Name of the event' field.");
  } else if (participantName.selectedOptions.length === 0) {
    alert("Please select atleast one member for your meeting in 'Participants' field.");
  } else if (filteredStorage.length === 0) {
    const result = getMeetingData();
    result.push(newItem);
    setMeetingData(result);
    window.open('./calendar.html', '_self');
  } else {
    alert('Failed to create an event. Time slot is already booked.');
  }
}

function collectionToArr(htmlCollection) {
  const resultArr = [];
  for (let i = 0; i < htmlCollection.length; i += 1) {
    resultArr.push(htmlCollection[i].text);
  }
  return resultArr;
}

function EventItem() {
  this.name = eventName.value;
  this.time = time.value;
  this.day = day.value;
  this.members = collectionToArr(participantName.selectedOptions);
}

function onPressBtnSubmit() {
  addNewEventToStorage(new EventItem());
}

btnCancel.addEventListener('click', () => window.open('./calendar.html', '_self'));
btnSubmit.addEventListener('click', () => onPressBtnSubmit());
