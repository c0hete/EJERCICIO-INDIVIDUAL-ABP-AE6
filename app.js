$(document).ready(function() {
    $('[data-fancybox]').fancybox({
        infobar: true,
        afterClose: function(instance, current) {
            instance.current.opts.$orig.show();
        }
    });
    
    $('.video').on('click', function() {
        window.open('https://www.youtube.com/watch?v=PpX-NTHpU3g', '_blank');
    });
    

    $('.mapa').on('click', function() {
        window.open('https://www.google.com/maps/place/00120+Cdad.+del+Vaticano/@41.9038163,12.4520612,16z/data=!3m1!4b1!4m6!3m5!1s0x1325890a57d42d3d:0x94f9ab23a7eb0!8m2!3d41.902916!4d12.453389!16zL20vMDd5dHQ', '_blank');
    });
});
