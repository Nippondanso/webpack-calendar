import { meetingData, hours, days } from './storage';
import './css/style.css'


let btnSubmit = document.querySelector("#btn-event-submit");
let btnCancel = document.querySelector("#btn-event-cancel");
let eventName = document.querySelector("#name-input");
let participantName = document.querySelector("#participants-select");
let day = document.querySelector("#day-select");
let time = document.querySelector("#time-select");

btnCancel.addEventListener("click", () => window.open('./calendar.html','_self') )
btnSubmit.addEventListener("click", () => tempFunc());



let tempFunc = () => {
    addNewEventToStorage(new EventItem())
    // table.innerHTML = "";
    // createTable(table, days, hours);
    // addMeetingInCalendar(meetingData);
    window.open('./calendar.html', '_self')
}

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

function EventItem() {
    this.name = eventName.value;
    this.time = time.value;
    this.day = day.value;
    this.members = collectionToArr(participantName.selectedOptions);
}

function collectionToArr(htmlCollection) {
    let resultArr = [];
    for (let i = 0; i < htmlCollection.length; i++) {
        resultArr.push(htmlCollection[i].text)

    }
    return resultArr
}

// console.log(localStorage.getItem('test'));
// localStorage.setItem('test', 'ХОБА!')