// from data.js
var tableData = data;

// YOUR CODE HERE!

// Define Date Filter Function
function ufoDateFilter(inputDate) {

    var filteredData = tableData.filter(sighting => sighting.datetime === inputDate);

    // Grab reference to table body
    var tbody = d3.select('tbody');

    // use map function to go throuogh each dictionary object in the filterd data list and append each value to the ufo-table
    filteredData.forEach(sighting => {
        // append row
        var row = tbody.append('tr');
        console.log(sighting);

        // loop through each dictionary key, create a cell, and append the value of that key to the cell
        Object.entries(sighting).forEach(([key, value]) => {
            console.log(key, value);
            // Create cell
            var cell = tbody.append('td');

            // Append value to cell
            cell.text(value);
        });
    });      
}

// Select filter table button 
var filterTable = d3.select('#filter-btn');

// Grab the input date and run the ufoDateFilter function when the button is clicked
filterTable.on('click', function(){
    // prevent page from refreshing
    d3.event.preventDefault();

    // Get the date to search for from the form
    var inputElement = d3.select('#datetime');

    // Get the value property
    var searchDate = inputElement.property('value');
    console.log(`Search Date: ${searchDate}`);

    // run filter function
    ufoDateFilter(searchDate);
});

// find search term from submission form
// input id is #datetime

// filter data for that search term (filter with arrow function)

// dynamically create table row
// table id is #ufo-table

// dynamically append data to that row

// return row
