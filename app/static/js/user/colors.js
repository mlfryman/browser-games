(function(){
  'use strict';

  $(document).ready(function(){
    // Click handler
    $('#controls > button').click(addBoxes);
    // Event handler: when you're mouse enters div.boxes, that lives under #boxes, then execute fn paintBackground
    $('#boxes').on('mouseenter', '.box', paintBackground);
  });

  function addBoxes(){
    // count = find css selector input with name 'count'
    var count = $('input[name=count]').val() * 1;
    for(var i = 0; i < count; i++){
      var $box = $('<div>'); // creates new box div
      $box.addClass('box'); // adds class to new box div
      $box.css('background-color', randomColor()); // styles the new box div
      $('#boxes').prepend($box); // adds the new box div to the DOM tree under #boxes
    }
  }

  function paintBackground(){
    var color = $(this).css('background-color');
    $('body').css('background-color', color);
  }

  // generates random colors using rgba, concats calculated values into string
  function randomColor(){
    var red = Math.floor(Math.random() * 256), // number between 0 to 255
        grn = Math.floor(Math.random() * 256),
        blu = Math.floor(Math.random() * 256),
        alp = Math.random(), // floating # 0 to 1
        str = 'rgba('+red+','+grn+','+blu+','+alp+')';

    return str;
  }

})();
