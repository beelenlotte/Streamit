//below is click detector that checks if the user has clicked anywhere
$('body').on('click',function(){
    //if the modal is no longer visible on the screen
    if(!$('#lucaModal').is(':visible')){
        //we get the src of the current video
        var trailer = $('#trailer').attr('src');
        //and reset it, that will sort out your problem
        $('#trailer').attr('src',trailer);
    }
    else if(!$('#lucaModal').is(':hidden')){
        $('#trailer').attr('src', 'https://www.youtube.com/embed/0hgHY9k-44U')
        
    }
});

$('#lucaCloseButton').click(function() {
    $('#trailer').attr('src', 'https://www.youtube.com/embed/0hgHY9k-44U')
})

$('#lucaButton').click(function() {
    toggleFullscreen();
    $('#trailer').attr('src', 'https://www.youtube.com/embed/0hgHY9k-44U?autoplay=1')
})

function getFullscreenElement() {
    return document.getFullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscrennElement;
  }

  function toggleFullscreen() {
    if (getFullscreenElement()) {
      document.exitFullscreen();
    } else {
      document.getElementById("trailer").requestFullscreen().catch(console.log);
    }
  }
