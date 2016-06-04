(function($) {
    "use strict";
    $(document).ready(function () { 

        
        /*===================================================================================*/
        /*menu toggle
        /*===================================================================================*/

        $(".menu-toggle-right").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled right");
            $("body").toggleClass("open-sidebar");
        });

        $(".menu-toggle-left").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled left");
            $("body").toggleClass("open-sidebar");
        });

        $(".st-pusher-after,.remove-icon").click(function(e) {
            $("#wrapper").removeClass("toggled");
            $("#wrapper").removeClass("right");
            $("#wrapper").removeClass("left");
            $("body").toggleClass("open-sidebar");
        });


        /*===================================================================================*/
        /* perfect scroll bar
        /*===================================================================================*/
        $('.scrollbar').perfectScrollbar();

        /*===================================================================================*/
        /* PRICE SLIDER
        /*===================================================================================*/

        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 1, 450 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        
        /*===================================================================================*/
        /*  WOW 
        /*===================================================================================*/

        new WOW().init();

        /*===================================================================================*/
        /*  CUSTOM SELECT
        /*===================================================================================*/

        if( $('.le-select').length > 0){
            $('.le-select select').customSelect({customClass:'le-select-in'});
        }
    }); 
})(jQuery);