// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// create table 
//clear data
//create a loop, use object.entries to get key
// add the table to html
function displayData(data){
    tbody.text("")
    data.forEach(function(sighting){
        tr2 = tbody.append("tr")
        Object.entries(sighting).forEach(function([key,value])
        {
            td2= tr2.append("td").text(value)
        });
    });
};
displayData(tableData)
//grab id for date input and filter button using d3 
var button = d3.select("filter-btn");
var date = d3.select("filter-btn");

//run through data fron the input
function clickSelect(){
    d3.event.preventDefault();
console.log(date.property("value"));
// table with data chosen by user
var filterTable = tableData.filter(sighting=>sighting.datetime===date.property("value"))
displayData(filterTable);
}

date.on("change", clickSelect);