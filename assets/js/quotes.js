function fisherYatesShuffle(array ){
    var count = array.length,
      randomnumber,
      temp;
    while( count ){
        randomnumber = Math.random() * count-- | 0;
        temp = array[count];
        array[count] = array[randomnumber];
        array[randomnumber] = temp;
    }
}

$(function() {
    var index = 0;
    var numItems = $('#quotes li').length;

    // randomize the elements
    function randomize() {
        var quotesArray = $('#quotes li').get();
        fisherYatesShuffle(quotesArray);
        // re-insert DOM elements in the new random order
        for (var i = 0; i < quotesArray.length; i++) {
            $("#quotes ul").append(quotesArray[i]);
        }
    }

    // make sure the index is not past the end of the array
    // if so, randomize the elements again and reset the index
    function checkIndex() {
        if (index >= numItems) {
            randomize();
            index = 0;
        }
    }

    // process the next item with 6 second delay, then fadeOut, then fadeIn of next element
    function next() {
        $("#quotes li").eq(index).delay(5000).fadeOut('slow', function() {
            ++index;
            checkIndex();
            $("#quotes li").eq(index).fadeIn('slow', next);
        });

    }
    // randomize the items initially and show the first one after randomization
    randomize();
    $('#quotes li').hide().eq(0).show();
    next();
});

