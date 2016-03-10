
$().ready(function() {
  $('.btn-default.play').click(function() {
    alert('we are about to have soo much fun! ');
      $(function() {
      var input = parseInt(prompt("Please enter a number if you'd like to play this awesome game "));
      var num = input;
      for (var i = 1; i <= input; i++) {
          if (i % 15 === 0)
            $('ul').append('<span class="ping-pong">PING-PONG</span><br>');
          else if (i % 3 === 0)
              $('ul').append('<span class="ping">PING</span><br>');
          else if (i % 5 === 0)
              $('ul').append('<span class="pong">PONG</span><br>');
          else
              $('ul').append(i + '<br>');
      } $('ul').append('<button type="button" class="btn btn-default refresh" >Play Again</button>');
      $('.btn-default.refresh').click(function() {
    location.reload();
  });
    });
  });

  $('.btn-default.refresh').click(function() {
    location.reload();
  });

  $('span.inappropriate').hover(function() {
    $( this ).append( $( "<span> ***PARDON ME, I MEANT NO OFFENSE*** </span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
    });
});





// print every number up to num
// if num % 3 = 0 then print PING!
// if num % 5 = 0  then print PONG!
// if num % 15 = 0  then print PING PONG!


