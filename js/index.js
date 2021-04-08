$(document).ready(function () {
    let menu_mobile=false;
    let favorite=false;

    //include html components
    // includeHTML();

    $('select').material_select();
    $('.modal').modal();
    $('.carousel_scroll').carousel(
        {
            dist: 0,
            padding: 0,
            indicators: true,
            duration: 200
        }
    );
    
    $(window).scroll(function () {
        var y = $(window).scrollTop();
        if(menu_mobile===false){
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
        }
        
    });

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
        changeCaret();
    }

    function changeCaret(){
        $(".caret").html("");
        $(".caret").append('<img src="assets/icons/caret.svg">');
    }

    function autoplay() {
        $('.carousel_scroll').carousel('next');
        setTimeout(autoplay, 5000);
    }

    $('.collap-header').click(function () {
        console.info($(this).parent().html())
        if($(this).parent().children(".collap-body").hasClass("active_colap")){
            $(this).parent().children(".collap-body").removeClass("active_colap");
            $(this).parent().children(".collap-body").fadeOut(0)
        }else{
            $(this).parent().children(".collap-body").fadeIn(100);
            $(this).parent().children(".collap-body").addClass("active_colap");
        }
    });

    $('.card-image').click(function () {
        var widthScreen = $(window).width();
        if(widthScreen>600){
            //solo para versiones que no son mobile
            if(!favorite){
                $("#model_detail_main").fadeIn(100);
                $("body").css("overflow","hidden");
            }else{
                favorite=false;
            }
        }
     });
    
     
    $('.card-content').click(function () {
        window.location.href = "detail.html";
    });

    $('.btn_send_review').click(function () {
        window.location.href = "responseReview.html";
    });

    $('.arrowLeft').click(function () {
        $('.carousel_scroll').carousel('prev');
    });
    $('.arrowRight').click(function () {
        $('.carousel_scroll').carousel('next');
    });

    $(".option2").mouseover(function () {
        $(".option").css("border-bottom", "none");
        $(this).css("border-bottom", "2px solid");
        $("#menu_active").fadeIn();
    });
    
    $('.fovorite_scroll').click(function () {
        favorite=true;
        if($(this).hasClass("fav_act")){
            $(this).children('.img_heart2').css("display","none");
            $(this).children('.img_heart1').fadeIn();
            $(this).removeClass("fav_act");
        }else{
            $(this).addClass("fav_act");
            $(this).children('.img_heart1').css("display","none");
            $(this).children('.img_heart2').fadeIn();
        }
    });

    $(".icon_user").mouseover(function () {
        $(this).children().children("#user_svg").css("fill","#0043BA");
    }).mouseout(function () {
        $(this).children().children("#user_svg").css("fill","#212121");
    });;
    $(".icon_favorites").mouseover(function () {
        $(this).children().children("#favorite_svg").css("fill","#0043BA");
    }).mouseout(function () {
        $(this).children().children("#favorite_svg").css("fill","#212121");
    });;
    $(".icon_cart").mouseover(function () {
        $(this).children().children("#cart_svg").css("fill","#0043BA");
    }).mouseout(function () {
        $(this).children().children("#cart_svg").css("fill","#212121");
    });;

    $("main").mouseout(function () {
        $("#menu_active").fadeOut();
        $(".option").css("border-bottom", "none");
    });
    $("footer").mouseout(function () {
        $("#menu_active").fadeOut();
        $(".option").css("border-bottom", "none");
    });


   
    $('.searchMobile').click(function () {
       $('#search_mobile_cont').fadeIn();
    });
    $('.m_search_close').click(function () {
        $('#search_mobile_cont').fadeOut();
    });
    $('.filters_mobile').click(function () {
        $('.filters_mobile_main').fadeIn();
    });
    $('.close_filters_mobile').click(function () {
        $('.filters_mobile_main').fadeOut();
    });

   
    
    

    $('.showMenu').click(function () {
        $('#menu_active_mobile').fadeIn();
        menu_mobile=true;
    });


    $('.modeSix').click(function () {
        $(".view_element").removeClass("l6");
        $(".view_element").addClass("l3");
        $(".view_element").children().css("width","261px")
        $(".view_element").children().children().children().children("img").css("width","261px")
    });
    $('.modeFour').click(function () {
       $(".view_element").removeClass("l3");
       $(".view_element").addClass("l6");
       $(".view_element").children().css("width","434.55px")
       $(".view_element").children().children().children().children("img").css("width","434.55px")
     });

    $('.close_menu').click(function () {
        $('#menu_active_mobile').fadeOut();
        menu_mobile=false;
    });

    $("#search_main").keydown(function () {
        $(".control").css("visibility", "hidden");
        $(".area2").removeClass("l4");
        $(".area2").addClass("l12");
        $(".search").addClass("big_search");
        $("main").css("opacity", "0.5");
        $("#seach_cont").fadeIn();
        $(".close_search").fadeIn();
        $(".close_search").unbind();
        $(".close_search").click(function () {
            $(".control").css("visibility", "visible");
            $(".area2").addClass("l4");
            $(".area2").removeClass("l12")
            $("#comp_search").removeClass('big_search');
            $(".close_search").fadeOut();
            $("#seach_cont").fadeOut();
            $("#search_main").val("");
            $("main").css("opacity", "1");
        });
    });

});
