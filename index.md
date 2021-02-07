<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>

<body>
    <div class="calendar">

        <div class="table-wrapper">
            <h2>Calendar</h2>
            <div class="table-controls">
                <select name="people" id="calendar-select-people" class="select">
                    <!-- <select name="people" id="calendar-select-people" class="form-select form-select-sm"> -->
                    <option selected value="*">All members</option>
                    <option value="Maria">Maria</option>
                    <option value="Bob">Bob</option>
                    <option value="Alex">Alex</option>
                </select>
                <input type="button" id="btn-new-event" value="New Event +">
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                </tr>
            </thead>

            <tbody class="tbody">
            </tbody>
        </table>
  
    </div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous">
    </script>
<script src="index.5115a9b3167f9e28ee0b.js"></script><script src="storage.12cc5d78580bc1ac81e8.js"></script></body>

</html>
