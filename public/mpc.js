$( document ).ready(function(){

// Click events
  (function() {

    var mySamples = [
      'kick',
      'snare',
      'clap',
      'clav',
      'cowbell',
      'crash',
      'hat',
      'snap',
      'scratch',
      'string',
      'synth',
      'tape',
      'whip',
      'whistle',
      'yeah_vox',
      'synth_stab'
      ];
    var arrayLength = mySamples.length;
    for (var s in mySamples) {
      var sector = mySamples[s];
      (function(sec){
        $('#' + sec).click(function(e){
          var audio = $('<audio />', {
          autoPlay : 'autoplay'
          });
          addSource(audio, 'sounds/' + sec + '.mp3');
          return false;
        });
      }(sector))
    }

// Keyboard events

  keyMap = {
    'kick': 81,
    'snare': 87,
    'clap': 69,
    'clav': 82,
    'cowbell': 65,
    'crash': 83,
    'hat': 68,
    'snap': 70,
    'scratch': 90,
    'string': 88,
    'synth': 67,
    'tape': 86,
    'whip': 49,
    'whistle': 50,
    'yeah_vox': 51,
    'synth_stab': 52
  };

    $(document).keydown(function(event){
      for(var index in keyMap) {
        console.log( index + ":" + keyMap[index] + "<br/>");
        if(event.which == keyMap[index])
        {
          var audio = $('<audio />', {
            autoPlay : 'autoplay'
          });
          addSource(audio, 'sounds/' + index + '.mp3');
          return false;
        }
      }

          // if(event.which == 65)
          //   {
          //     var audio = $('<audio />', {
          //       autoPlay : 'autoplay'
          //     });
          //     console.log('I HIT A');
          //     addSource(audio, 'sounds/kick.mp3');
          //     return false;
          //   }
          // else if(event.which == 66)
          // {
          //   var audio = $('<audio />', {
          //     autoPlay : 'autoplay'
          //   });
          //   console.log('I HIT B');
          //   addSource(audio, 'sounds/snare.mp3');
          //   return false;
          // }
        });

    function addSource(elem, path) {
      $('<source />').attr('src', path).appendTo(elem);
    };

  })();
});
