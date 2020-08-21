

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
  $('.artist-carousel').owlCarousel({
    loop:true,
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
