function flightSearch() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    var flight = response.flight;
    var date = new Date(localStorage.getItem('date'));
    var day = date.getDay(date);
    var dayOfWeek = [];
    dayOfWeek[0] = "Sunday";
    dayOfWeek[1]= "Monday";
    dayOfWeek[2]= "Tuesday";
    dayOfWeek[3]= "Wednesday";
    dayOfWeek[4]= "Thursday";
    dayOfWeek[5]= "Friday";
    dayOfWeek[6]="Saturday";
    console.log(day);
    console.log(date);
    var table = '<table class="flightTable">' +
        '<tr><th class="flightHead">' + flight[0].flightData.flightName + ' - ' + flight[0].flightData.flightNumber + '</th>' +
        '<th class="flightHead">' + flight[0].flightData.price + '</th>' +
        '<th class="flightHead">' + flight[0].flightData.date + '</th>' +
        '<th class="flightHead">' + flight[0].flightData.time + '</th>' +
        '<th class="flightHead">' + flight[0].flightData.travelHours + '</th></tr></table><br>';
		for(var r = 1; r < flight.length; r++){
            var data = [];
			data[0] = flight[r].flightData.flightName + ' - ' + flight[r].flightData.flightNumber;
			data[1] = flight[r].flightData.price;
            data[2] = flight[r].flightData.date;
            data[3] = flight[r].flightData.time;
            data[4] = flight[r].flightData.travelHours;
            console.log(data);
            if ( ( dayOfWeek[day] == data[2] ) || ( data[2] == "Everyday" ) ) {
           // table += '<td class="flightColumn">'+data[c]+'</td>';
            table += '<table class="flightTable">';
            table += '<tr class="flightRow">';	
			for(var c = 0; c < data.length; c++) {
            table += '<td class="flightColumn">'+data[c]+'</td>';
			}
            table += '</tr>'
            table +=  '</table><br>'; 
            document.getElementById("flightSearch").innerHTML = table; 
            console.log(table);           
        } 
    }				
    }
 };
	xhttp.open("GET", "easyfly.json", true);
	xhttp.send();  
}

document.getElementById("flightSearch").innerHTML= flightSearch();



