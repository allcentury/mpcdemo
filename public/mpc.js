$( document ).ready(function(){
  (function() {
    $('#kick').click(function() {
      var audio = $('<audio />', {
        autoPlay : 'autoplay'
      });
      addSource(audio, 'sounds/kick.mp3');
      return false;
    });

    $(document).keydown(function(event){
          if(event.which == 65){
              var audio = $('<audio />', {
                autoPlay : 'autoplay'
              });
              console.log('I HIT A');
              addSource(audio, 'sounds/kick.mp3');
              return false;
          }
        });

    function addSource(elem, path) {
      $('<source />').attr('src', path).appendTo(elem);
    };

  })();
});
