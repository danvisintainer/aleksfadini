// Gigs Automation Script

$(function() {


// define useless functions
var $gigstable = $('.gigstable');
console.log('questa e gigstable', $gigstable);
var $gigslist = $gigstable.children();

console.log('questa e gigslist', $gigslist);
console.log('questa e gigslist[1]', $gigslist[1]);
console.log('$gigslist.length',$gigslist.length);

// used stuff
var $upcomingDiv = $(".upcomingshows");
console.log(' $upcomingDiv:',  $upcomingDiv);
var $gigArray = [0,0];
console.log(' initializing $gigArray:',  $gigArray);
var $gigRows = $('tr');
var $totalGigs = $gigRows.length;
console.log('$gigRows', $gigRows);
console.log('totalGigs', $totalGigs);
console.log('$gigRows[0]', $gigRows[0]);
var $gigRowschild = $(":nth-child(1)", $gigRows[0]);
var $textinsidediv = $gigRowschild.text();
console.log(' $textinsidediv',  $textinsidediv);
var $now = new Date();
var $nextGigIndex = 99999;
var $numberofpastgigs = 0;
var $numberoffuturegigs = 0;

// create an array with all the gigs: in this form gigArray[i]=[date,time, name, locatiion]
for (i = 0; i < $totalGigs; i++) {
      console.log('i=', i); 
      $gigArray[i]=[0,0,0,0];
      console.log('inizialized $gigArray[', i, ']', $gigArray[i]);
      var $date = $(":nth-child(1)", $gigRows[i]).text();
      console.log(' $date for gig number',i,":", $date);
      var $time = $(":nth-child(2)", $gigRows[i]).text();
      console.log(' $time for gig number',i,":", $time);
      var $name = $(":nth-child(3)", $gigRows[i]).text();
      console.log(' $name for gig number',i,":", $name);
      var $location = $(":nth-child(4)", $gigRows[i]).text();
      console.log(' $location for gig number',i,":", $location);
      $gigArray[i]=[$date,$time,$name,$location];
      console.log(' $gigArray[',i,"]:", $gigArray[i]);       
};



var $str = $gigArray[0][0].concat($gigArray[0][1]);

      console.log(' $str:', $str); 
var $dateinjs = new Date($str);
      console.log(' $dateinjs', $dateinjs);


//gigDate function: extracts the date from its gigArray row element (Called gigrow, should be taken from $gigArray[n])
gigDate = function (gigrow) {
  var $dateplustime = gigrow[0].concat(gigrow[1]);
  var $gigDate = new Date($dateplustime);
  return $gigDate;
}; 
// (test)
$try = gigDate($gigArray[0]);
console.log(' $gigdatefunction $gigArray[0]', $try);
 



//Extract month name from a date

getMonthName = function (dateinformat) {
    var mNumber = dateinformat.getMonth();
    var mName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return mName[mNumber];
};

console.log(' $getMonthName $gigArray[0]', getMonthName($try));

//Extract month name from its gigArray row element (Called gigrow, should be taken from $gigArray[n])

getMonthNameFromArray = function (gigrow) {
    var $dateInFormat = gigDate(gigrow);
    var $monthName = getMonthName($dateInFormat);
    return $monthName;
};

var $finaltry = getMonthNameFromArray($gigArray[0]);
console.log(' $getMonthName $gigArray[0]', $finaltry);

//Generates full date as string from its gigArray row element (Called gigrow, should be taken from $gigArray[n])

getDateWritten = function (gigrow) {
    var $YearWritten = gigDate(gigrow).getFullYear();
    var $MonthWritten = getMonthNameFromArray(gigrow);
    var $DayWritten = gigDate(gigrow).getDate();
    var $dateWritten = $MonthWritten + " " + $DayWritten + ", "+ $YearWritten;
    return $dateWritten;
};

var $longdate = getDateWritten($gigArray[2]);
console.log(' $longdate $gigArray[2]', $longdate);


// function: transforms a date into a TIME in AM/PM string
function format_time(date_obj) {
  // formats a javascript Date object into a 12h AM/PM time string
  var hour = date_obj.getHours();
  var minute = date_obj.getMinutes();
  var amPM = (hour > 11) ? " PM" : " AM";
  if(hour > 12) {
    hour -= 12;
  } else if (hour == 0) {
    hour = "12";
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  return hour + ":" + minute + amPM;
};



//Generates Am/PM day as string from its gigArray row element (Called gigrow, should be taken from $gigArray[n])

getTimeWritten = function (gigrow) {
    var $24hourstime = gigDate(gigrow);
    var $12hourstime = format_time($24hourstime);
    return $12hourstime;
};

console.log(' getTimeWritten($gigArray[0])', getTimeWritten($gigArray[0]));

// div test



console.log(' $now', $now);
console.log('initializing $nextGigIndex', $nextGigIndex);

//Move older gigs in Past Gigs section
  // Append the Past Gigs section
var $pastGigsDiv = $( "<div id='pastshows'>  <h3> Past Shows </h3> <table> <tbody> </tbody> </table> </div> <hr/>" );
var $pastGigsTable = $pastGigsDiv.children()[1];
var $pastGigsTbody = $(":nth-child(1)", $pastGigsTable);
var $temppastshow = "";
$( "#gigssection" ).append( $pastGigsDiv ); 
$pastGigsDiv.hide(); 

console.log(' $pastGigsDiv', $pastGigsDiv);
console.log(' $pastGigsTable', $pastGigsTable);
console.log(' $pastGigsTbody', $pastGigsTbody);

//element hidden unless there are gigs there are gigs at some point









// countdown function

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};


//create a clock

var $clock = $('<div id="clockdiv"> Days: <span class="days"></span><br> Hours: <span class="hours"></span><br> Minutes: <span class="minutes"></span><br> Seconds: <span class="seconds"></span> </div>');

// var $countDownDiv = $( "<div class='countdown'>  <h3> Countdown </h3> </div>" );
// $countDownDiv.show(); 



  // cycle through every gig, 




        var $tempCountDownDiv = [0,0];

  for (i = 0; i < $totalGigs; i++) {



    var $gigDateFromArray = gigDate($gigArray[i]);
    console.log("$gigRows[",i,"]", $gigRows[i]);
    var $tempgigDate = getDateWritten($gigArray[i]);
    var $tempgigTime = getTimeWritten($gigArray[i]);
    var $tempgigName = ($gigArray[i][2]);
    var $tempgigLocation = ($gigArray[i][3]);
 

           // if a gig is future...
    if ($now < $gigDateFromArray) {
        //...replace date with written format
        $(":nth-child(1)", $gigRows[i]).replaceWith("<td class='nobr'> "+ getDateWritten($gigArray[i])+ " </td>");
        //...replace time with written format
        $(":nth-child(2)", $gigRows[i]).replaceWith("<td> "+ getTimeWritten($gigArray[i])+ " </td>");
        //.. Add Countdown section
        $tempCountDownDiv[i] = $( "<div class='countdown'>"+ i +"  <h3> Countdown </h3> </div>" );

        console.log(        "$tempCountDownDiv[i]",$tempCountDownDiv[i]);
        // $($gigRows[i]).append( $tempCountDownDiv[i] );  
        var $gigRowfirstchild= $(":nth-child(1)", $($gigRows[i]));
          $($gigRowfirstchild).append( $tempCountDownDiv[i] );  
          var $clockTime = getTimeRemaining(gigDate($gigArray[i]));
           var $clock = $('<div id="clockdiv'+i+'"> Days: <span class="days">'+ $clockTime.days +'</span><br> Hours: <span class="hours">'+ $clockTime.hours +'</span><br> Minutes: <span class="minutes">'+ $clockTime.hours +' </span><br> Seconds: <span class="seconds">'+ $clockTime.seconds +'</span> </div>');
           $tempCountDownDiv[i].append($clock);

        $tempCountDownDiv[i].hide();
      $numberoffuturegigs = ($numberoffuturegigs + 1);
    }
     else
    { 
        // if a gig is past, generate the corresponding info...
        console.log('si in effetti va spostat a past, numero', i);
        $numberofpastgigs = ($numberofpastgigs + 1);



        console.log("details of gigs:",$tempgigDate, $tempgigTime, $tempgigName, $tempgigLocation);

        $temppastshow = $("<tr>  <td class='nobr'>" + $tempgigDate + " </td> <td>" + $tempgigTime + " </td> <td>" + $tempgigName + "</td> <td>" + $tempgigLocation + " </td> </tr>"); 
        console.log("$temppastshow",$temppastshow);
        //... then move it to the past section
        $gigRows[i].remove();
        $($pastGigsTbody).append($temppastshow);

        // if a gig is past, take the previous one and check that it is in the future or present, if yes, it's $nextGigIndex
            if (gigDate($gigArray[i-1]) > $now) {
              $nextGigIndex = (i - 1);
            }
           else
           {}
    };

  };

// show past gigs section if there are any
if ( $numberofpastgigs > 0)
  {
      $pastGigsDiv.show();
  }
else
  {

  };    


// Bind countdown on hover
        

setInterval(function(){

  for (i = 0; i < $numberoffuturegigs; i++) {
        var $gigRowsi = $($gigRows[i]);
        if($gigRowsi.is(":hover")) {
           $tempCountDownDiv[i].fadeIn();
           var $clockTime = getTimeRemaining(gigDate($gigArray[i]));
           var $clock = $('<div id="clockdiv'+i+'"> Days: <span class="days">'+ $clockTime.days +'</span><br> Hours: <span class="hours">'+ $clockTime.hours +'</span><br> Minutes: <span class="minutes">'+ $clockTime.hours +' </span><br> Seconds: <span class="seconds">'+ $clockTime.seconds +'</span> </div>');
           $tempCountDownDiv[i].html($clock);
           console.log("$clockTime",$clockTime);
        }
        else {
           $tempCountDownDiv[i].fadeOut();
           //        $tempCountDownDiv[0].show();
        }

  }
}, 200);








//if ( $numberoffuturegigs > 0) {



    //if pointer hovers on any $tr, 



     //   than find out which one, then append the respective countdown and show it


      // then append the respective countdown and show it








//  }
//else
  //{

 // };   



// Determine what is the Next Gig


console.log('updated $nextGigIndex', $nextGigIndex);
          
// Last, show the next gig in the "next gig" section (note: it should be added to the index page somehow, one day)
    // Append the "Next Gig Section"
    // Append the nextGig
    // Apply the countdown on hover


});





// Utilities:

//Show Countdown on Hover
  //Create hidden overlay
  //While hovering on a tr element of the table (maybe using css:hover and jquery on it?)
  //Show Overlay
  //Apply countDown over that overlay





//Calculate countdown to a selected date and time







// Redundant:


// Determine what is the Next Gig
  // cycle through every gig, if a gig is future do nothing
  // if a gig is past, take the previous one and check that it is in the future or present, if yes, put it in future gigs
