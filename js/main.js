$(document).ready(function(){
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    })
    $("#zoom_05").elevateZoom({
        zoomType:"inner",
        cursor: "crosshair"
      });
      $(document).ready(function() {
        $('select').niceSelect();
      });




  })