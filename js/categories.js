$(document).ready(function () {
    configuRating();

    function configuRating() {
        var options = {
            max_value: 5,
            step_size: 0.5,
            initial_value: 0,
            selected_symbol_type: 'utf8_star', // Must be a key from symbols
            cursor: 'default',
            readonly: true,
            change_once: false, // Determines if the rating can only be set once
            ajax_method: 'POST',
            url: 'http://localhost/test.php',
            additional_data: {} // Additional data to send to the server
        }
        $(".rating").rate(options);
    }

    $('#optSizeGuie').click(function () {
            $('#optDetail').fadeOut(100);
            $('#optGuie').fadeIn();
    });

    $('.modal_close_detail').click(function () {
        $("#model_detail_main").fadeOut(100);
        $("body").css("overflow","auto");
    });

    $('.modal_close_guie').click(function () {
        $('#optDetail').fadeIn();
        $('#optGuie').fadeOut(100);
    });
});


