var flight = [
    {
         flightData : {
                         flightName : "Flight Name",
                         flightNumber : "Number",
                         price : "Price(per ticket)",
                         from : "From",
                         to : "To",
                         time : "Departure Time",
                         travelHours : "Duration"
         }
     },
     {
         flightData : {
                         flightName : "IndiGo",
                         flightNumber : "1111",
                         price : "Rs.45,000",
                         from : "Chennai",
                         to : "Delhi",
                         time : "2:00 PM",
                         travelHours : "2 Hours and 55 Minutes"
                     }
     },
     {
         flightData : {
                         flightName : "AirCanada",
                         flightNumber : "2222",
                         price : "Rs.38,000",
                         from : "Delhi",
                         to : "Chennai",
                         time : "5:00 PM",
                         travelHours : "2 Hours and 35 Minutes"
        }
    },
    {
         flightData : {
                         flightName : "Cathay Pacific",
                         flightNumber : "3333",
                         price : "Rs.65,000",
                         from : "Chennai",
                         to : "Bangalore",
                         time : "3:00 AM",
                         travelHours : "0 Hour(s) and 50 Minutes"
         }
    },
    {
        flightData : {
                     flightName : "SpiceJet",
                     flightNumber : "4444",
                     price : "Rs.54,000",
                     from : "Bangalore",
                     to : "Chennai",
                     time : "9:00 AM",
                     travelHours : "0 Hour(s) and 50 Minutes"
         }
     },
     {
         flightData : {
                         flightName : "Air India",
                         flightNumber : "5555",
                         price : "Rs.29,000",
                         from : "Bangalore",
                         to : "Delhi",
                         time : "2:00 AM",
                         travelHours : "1 Hour(s) and 30 Minutes"
         }
    },
    {
        flightData : {
                        flightName : "Air India",
                        flightNumber : "6666",
                        price : "Rs.29,000",
                        from : "Delhi",
                        to : "Bangalore",
                        time : "2:00 AM",
                        travelHours : "1 Hour(s) and 30 Minutes"
        }
   }

]


function FlightClass (name, number, price, from , to, time, duration) {
    
    this.name = name;
    this.number = number;
    this.price = price;
    this.from = from;
    this.to = to;
    this.time = time;
    this.duration = duration;

}



function flightSearch(from , to, passengers) {
    var table = '<table class="flightTable">' +
        '<tr><th class="flightHead">' + flight[0].flightData.flightName +' - '+ flight[0].flightData.flightNumber  +'</th>' +
        '<th class="flightHead">' + flight[0].flightData.price + '</th>' +
        '<th class="flightHead">' + flight[0].flightData.from + '</th>' +
        '<th class="flightHead">' + flight[0].flightData.to + '</th>' +
        '<th class="flightHead">' + flight[0].flightData.time + '</th>' +
        '<th class="flightHead">' + flight[0].flightData.travelHours + '</th></tr></table></br>'; 

       
    var i;
    for ( i in flight ) {
        console.log(from, to, passengers);
        var x = new FlightClass(flight[i].flightData.flightName, flight[i].flightData.flightNumber, flight[i].flightData.price, flight[i].flightData.from, flight[i].flightData.to, flight[i].flightData.time, flight[i].flightData.travelHours);
        if ( from == to) {
            table += '<table class="flightTable">';
            table += '<tr class="flightRow">';	
            table += '<td class="flightColumn"> From and to cannot be denoting the same place. Retry..! </td>';
            table += '</tr>'
            table += '</table><br>';
            return table;
        }
        else if (( from == x.from) && ( to == x.to )) {
            console.log( x.from , from, x.to, to, x.name );
            console.log ( flight[1]);

            table += '<table class="flightTable">';
            table += '<tr class="flightRow">';	
            table += '<td class="flightColumn">'+x.name+' - '+x.number+'</td>';
            table += '<td class="flightColumn">'+x.price+'</td>';
            table += '<td class="flightColumn">'+x.from+'</td>';
            table += '<td class="flightColumn">'+x.to+'</td>';
            table += '<td class="flightColumn">'+x.time+'</td>';
            table += '<td class="flightColumn">'+x.duration+'</td>';
            table += '</tr>'
            table += '</table><br>'; 
            // document.getElementById("flightSearch").innerHTML = table ;
            // console.log(document.getElementById("flightSearch");
            console.log(table)
            return table;
        }
    }
}

document.getElementById("flightSearch").innerHTML= flightSearch(localStorage.getItem("from"), localStorage.getItem("to"), localStorage.getItem("passengers"));



