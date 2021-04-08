$(document).ready(function () {

    $('#optSizeGuie').click(function () {
        $('#optDetail').fadeOut(100);
        $('#optGuie').fadeIn();
    });

    $('.btnWriteReview').click(function () {
        window.location.href = "writeReview.html";
    });
    

});