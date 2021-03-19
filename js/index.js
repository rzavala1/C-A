$(document).ready(function () {


    $(window).scroll(function () {
        var y = $(window).scrollTop();
        console.info(y)
        if (y < 140) {
            $('.information_header').addClass("quit_header");
            $('.information_header').removeClass("show_header");
            $('.main_header').removeClass("menu_tranform");
            $('.main_header').addClass("menu_tranform_normal");
            $('.menu_logo').removeClass("change_logo");
        } else {
            $('.information_header').removeClass("quit_header");
            $('.information_header').addClass("show_header");
            $('.main_header').addClass("menu_tranform");
            $('.menu_logo').addClass("change_logo");
            $('.main_header').removeClass("menu_tranform_normal");
        }
    });

    $('.carousel_scroll').carousel(
        {
            dist: 0,
            padding: 0,
            indicators: true,
            duration: 200
        }
    );

    autoplay();
    configuration();

    function configuration() {
        var widthScreen = $(window).width();
        let options = {
            dist: 0,
            padding: 0,
            indicators: true,
            duration: 400
        }
        if (widthScreen < 600) {
            $(".carousel_fovorites_control").removeClass("carousel-item");
            $(".carousel_fovorites_control .element").addClass("carousel-item");
            options.indicators = false;
        }
        $('.carousel_fovorites_main').carousel(options);

        $('.arrowLeft_fav').click(function () {
            $('.carousel_fovorites_main').carousel('prev');
        });
        $('.arrowRight_fav').click(function () {
            $('.carousel_fovorites_main').carousel('next');
        });
    }

    function autoplay() {
        $('.carousel_scroll').carousel('next');
        setTimeout(autoplay, 5000);
    }

    $('.arrowLeft').click(function () {
        $('.carousel_scroll').carousel('prev');
    });
    $('.arrowRight').click(function () {
        $('.carousel_scroll').carousel('next');
    });

    $(".option2").mouseover(function () {
        $(this).css("border-bottom", "2px solid");
        $("#menu_active").fadeIn();
    });

    $("main").mouseout(function () {
        $("#menu_active").fadeOut();
        $(".option").css("border-bottom", "none");
    });

    $('.showMenu').click(function () {
        $('#menu_active_mobile').fadeIn();
        $('body').css("overflow","hidden");
    });

    $('.close_menu').click(function () {
        $('#menu_active_mobile').fadeOut();
        $('body').css("overflow","auto");
    });

    $("#search_main").keydown(function () {
        $(".control").css("display", "none");
        $(".area1").removeClass("col");
        $(".area2").css("width", "100%");
        $(".search").css("width", "100%");
        $("main").css("opacity", "0.5");
        $("#seach_cont").fadeIn();
        $(".close_search").fadeIn();
        $(".close_search").unbind();
        $(".close_search").click(function () {
            $(".control").css("display", "block");
            $(".area1").addClass("col");
            $(".area2").addClass("l12");
            $(".search").css("width", "203px");
            $(".close_search").fadeOut();
            $("#seach_cont").fadeOut();
            $("#search_main").val("");
            $("main").css("opacity", "1");
        });
    });

});
