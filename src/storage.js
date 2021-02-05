
let meetingData = [
];
// let meetingData = [{
//     name: "Dayly Standup",
//     time: "11",
//     day: "Mon",
//     members: ["Maria", "Bob"]
// },
// {
//     name: "FE team sync",
//     time: "14",
//     day: "Mon",
//     members: ["Maria", "Bob", "Alex"]
// },
// {
//     name: "Planning session",
//     time: "13",
//     day: "Wed",
//     members: ["Bob", "Alex"]
// },
// {
//     name: "Retrospective",
//     time: "17",
//     day: "Wed",
//     members: ["Maria"]
// }
// ];

const meetingDataKey = 'meetingData'


function initLocalStorage() {
    if (localStorage.getItem(meetingDataKey) == null) {
        localStorage.setItem(meetingDataKey, JSON.stringify(meetingData))
    }
}

function getMeetingData() {
    return JSON.parse(localStorage.getItem(meetingDataKey))
}

function setMeetingData(data) {
    localStorage.setItem(meetingDataKey, JSON.stringify(data))
}



const hours = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];
const days = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export { meetingData, hours, days, initLocalStorage, getMeetingData, setMeetingData }