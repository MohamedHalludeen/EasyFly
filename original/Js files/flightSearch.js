var flightData = {
    flightName : "IndiGo",
    flightNumber : "1111",
    price : "Rs.45,000",
    date : "Everyday",
    time : "2:00 PM",
    travelHours : "23 Hours and 55 Minutes"
}


function flightClass (day) {
    this.name = flightData.flightName;
    this.number = flightData.flightNumber;
    this.price = flightData.price;
    this.day = day;
    this.time = flightData.time;
    this.duration = flightData.travelHours;
}





function flightSearch() {
/*var xhttp = new XMLHttpRequest();
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
    console.log(date);*/
    var x = new flightClass("Everyday");
    console.log(x.name);
    var table = '<table class="flightTable">' +
        '<tr><th class="flightHead"> Flight Name - Number </th>' +
        '<th class="flightHead"> Price </th>' +
        '<th class="flightHead"> Date </th>' +
        '<th class="flightHead"> Time </th>' +
        '<th class="flightHead"> Travel Hours </th></tr></table><br>';
        
        /*for(var r = 1; r < 1; r++){
          var data = [];
			data[0] = x.name + ' - ' + x.number;
			data[1] = x.price;
            data[2] = x.day;
            data[3] = x.time;
            data[4] = x.duration;
            console.log(data);
            if (  x.day == flightData.date ) {
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
	xhttp.open("GET", "js files/json files/easyfly.json", true);
    xhttp.send();  
*/
 //if ( x.day == flightData.date) {
    table += '<table class="flightTable">';
    table += '<tr class="flightRow">';	
    table += '<td class="flightColumn">'+x.name+' - '+x.number+'</td>';
    table += '<td class="flightColumn">'+x.price+'</td>';
    table += '<td class="flightColumn">'+x.day+'</td>';
    table += '<td class="flightColumn">'+x.time+'</td>';
    table += '<td class="flightColumn">'+x.duration+'</td>';
    table += '</tr>'
    table += '</table><br>'; 
   // document.getElementById("flightSearch").innerHTML = table; 
   document.getElementById("flightSearch").innerHTML = table;
    console.log(table);
 //}
}
document.getElementById("flightSearch").innerHTML= flightSearch();



