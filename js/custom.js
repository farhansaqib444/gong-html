// Multi images upload function Start
$(document).ready(function() {
  if (window.File && window.FileList && window.FileReader) {
    $("#files-g").on("change", function(e) {
      var files = e.target.files,
          filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i];
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<div class=\"single-img\">" +
              "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
              "<span class=\"remove\"><i class=\"fa fa-close\"></i></span>" +
              "</div>").insertAfter("#pip");
          $(".remove").click(function(){
            $(this).parent(".single-img").remove();
          });
        });
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Your browser doesn't support to File API")
  }
});
// Multi images upload function End


// Feature Images upload function Start
var openFile = function(event) {
  var input = event.target;

  // Instantiate FileReader
  var reader = new FileReader();
  reader.onload = function(){
    TheFileContents = reader.result;

    document.getElementById("pip-2").innerHTML = [
      ' <div class=\"single-img\"> ',
      ' <img class=\"imageThumb\" src=\" ' +TheFileContents+ '" title=\"" + file.name + "\"/> ' ,
      ' <span class=\"remove\"><i class=\"fa fa-close\"></i></span> ' ,
      ' </div>'
    ].join('\n');
    $(".remove").click(function(){
      $(this).parent(".single-img").remove();
    });
  };
  reader.readAsDataURL(input.files[0]);
};
// Feature Images upload function End

/// value plus minus button start
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


var wavesurfer = Object.create(WaveSurfer);
  $(document).ready(function(){
    wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: '#940000',
      progressColor: '#273043',
      responsive: true,
      // backend: 'MediaElement',
    });


    // Load the audio file here.
    wavesurfer.load('../assets/audio/demo.wav');
    wavesurfer.on('ready', function () {
      let time = wavesurfer.getDuration();
      $("#duration").text(formateTime(time));
    });
    wavesurfer.on('audioprocess', function () {
      let time = wavesurfer.getCurrentTime();
      $("#currentDuration").text(formateTime(time));

    });


    function formateTime(time) {
      var minutes = Math.floor(time / 60).toFixed(0);
      minutes = (minutes < 10)?"0"+minutes:minutes;
      var seconds = (time - minutes * 60).toFixed(0);
      seconds = (seconds < 10)?"0"+seconds:seconds;
      return minutes.substr(-2) + ":" + seconds;
    }
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $(document).ready(function(){
  $('.artist-carousel').owlCarousel({
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
    }
  });
});


  $(document).ready(function(){
    $('.bonus-product-slider.owl-carousel').owlCarousel({
      margin:10,
      nav:false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:4
        }
      }
    });
  });



  // Upload stroy images Start


  $(document).ready(function(){
    $('.upload-wrap input[type=file]').change(function(){
      var id = $(this).attr("id");
      var newimage = new FileReader();
      newimage.readAsDataURL(this.files[0]);
      newimage.onload = function(e){
        $('.uploadpreview.' + id ).css('background-image', 'url(' + e.target.result + ')' );
      }
    });
  });
  // Upload stroy images End


  // Single Product Slider Start
  $('#myCarousel').carousel({
    interval: false
  });
  $('#carousel-thumbs').carousel({
    interval: false
  });

  // handles the carousel thumbnails
  // https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr('id');
    var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
    $('#myCarousel').carousel(id);
  });
  // when the carousel slides, auto update
  $('#myCarousel').on('slide.bs.carousel', function(e) {
    var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
  });
  // when user swipes, go next or previous
  $('#myCarousel').swipe({
    fallbackToMouseEvents: true,
    swipeLeft: function(e) {
      $('#myCarousel').carousel('next');
    },
    swipeRight: function(e) {
      $('#myCarousel').carousel('prev');
    },
    allowPageScroll: 'vertical',
    preventDefaultEvents: false,
    threshold: 75
  });


  // Single Product Slider End


// Chat images upload start

// Chat images upload End

