// Gigs Automation Script

// First, show the next gig in the "next gig" section (note: it should be added to the index page somehow, one day)
    // Append the "Next Gig Section"
    // Append the nextGig
    // Apply the countdown on hover

// Determine what is the Next Gig
  // cycle through every gig, if a gig is future do nothing
  // if a gig is past, take the previous one and check that it is in the future or present, if yes, put it in future gigs

//Move older gigs in Past Gigs section
  // Append the Past Gigs section
  // cycle through every gig, if a gig is future Add Countdown on hover
  // if a gig is past, move it to the past gigs section
  

$(function() {

// define useless functions
var $gigstable = $('.gigstable');
console.log('questa e gigstable', $gigstable);
var $gigslist = $gigstable.children();

console.log('questa e gigslist', $gigslist);
console.log('questa e gigslist[1]', $gigslist[1]);
console.log('$gigslist.length',$gigslist.length);

// used stuff
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

// create an array with all the gigs: in this form gigsarray[i]=[date,time, name, locatiion]
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


console.log($gigArray[1][1]); 


  });



// Utilities:

//Show Countdown on Hover
  //Create hidden overlay
  //While hovering on a tr element of the table (maybe using css:hover and jquery on it?)
  //Show Overlay
  //Apply countDown over that overlay



//Transform a date string from a number to extended format

//Calculate countdown to a selected date and time

