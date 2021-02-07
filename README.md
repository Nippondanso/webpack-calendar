# Webpack-calendar

**Webpack-calendar** is a simple meeting planning calendar for a meeting room in your office:

 - Display meetings planned;
 - Filter meetings for a particular team member;
 - Add new meetings;
 - Delete meetings;
 
 
 **Webpack-calendar**'s description:
 
 - You can build a meeting one meeting room.
 - Application consist from two screens: “Calendar” screen and “Create event” screen;
 - “Calendar” screen consists of a pre-defined table with 5 days (Mon-Fri) for columns and 9 time slots (10:00-18:00, one hour long each) for rows;
 - There is a team of several people that can take part in the meetings.
 - One meeting can take only 1 hour and obtain one cell in the “Calendar” screen;
 
 
 # Documentation
 
 - On a “Calendar” screen user able to see all meetings scheduled for the meeting room;
 - User able to filter meetings by person;
 - In order to create new meeting user should click “New Event+” button at “Calendar” screen, after that he should be transferred to “Create event” screen. At that screen user should enter meeting title, select participants (can be multiple), select day (Mon-Fri), select time (10:00-18:00);
 - The meeting can be successfully created if and only if the time slot for that day and time is free. Otherwise the error bar will be shown.
 - After successful creation of an event, the user will be transferred back to the “Calendar” screen where new event will be already be displayed.
 - In order to delete a meeting user has to click the delete icon near the meeting title at “Calendar” screen and then confirm his action in a confirmation dialog.
 
 
