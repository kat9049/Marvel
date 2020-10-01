
    $(document).ready(function(){
        $("#scrollHome").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    $(document).ready(function(){
        $("#scrollAbout").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    $(document).ready(function(){
        $("#scrollServices").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    $(document).ready(function(){
        $("#scrollContact").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });


    // $(window).scroll(function(){
    //     if ($(window).scrollTop() > $('.first-screen').height() - $('.first-screen').height()/2 ) {
    //         $('.scroll').css({'display': 'none'});
    //         $('.scrollabout').css({'display': 'block'});
    //         $('.scrollservices').css({'display': 'none'});
    //         $('.scrollcontact').css({'display': 'none'});
    //     } else if ($(window).scrollTop() > ($('.first-screen').height() + $('.about').height())){
    //         $('.scroll').css({'display': 'none'});
    //         $('.scrollabout').css({'display': 'none'});
    //         $('.scrollservices').css({'display': 'block'});
    //         $('.scrollcontact').css({'display': 'none'});
    //     } else if ($(window).scrollTop() >  $('.first-screen').height() + $('.about').height() + $('.services').height()){
    //         $('.scroll').css({'display': 'none'});
    //         $('.scrollabout').css({'display': 'none'});
    //         $('.scrollservices').css({'display': 'none'});
    //         $('.scrollcontact').css({'display': 'block'});
    //     }
    //     else{
    //         $('.scroll').css({'display': 'block'});
    //         $('.scrollabout').css({'display': 'none'});
    //         $('.scrollservices').css({'display': 'none'});
    //         $('.scrollcontact').css({'display': 'none'});
    //     }
    // });


    $(window).scroll(function(){
        if ($(window).scrollTop() >  $('.first-screen').height() + $('#about').height() + $('#services').height()){
            $('.scroll').css({'display': 'none'});
            $('.scrollabout').css({'display': 'none'});
            $('.scrollservices').css({'display': 'none'});
            $('.scrollcontact').css({'display': 'block'});
        }
        if ($(window).scrollTop() > ($('.first-screen').height() + $('.about').height())){
            debugger
            $('.scroll').css({'display': 'none'});
            $('.scrollabout').css({'display': 'none'});
            $('.scrollservices').css({'display': 'block'});
            $('.scrollcontact').css({'display': 'none'});
        }
        if ($(window).scrollTop() > $('.first-screen').height() - $('.first-screen').height()/2 ) {
            $('.scroll').css({'display': 'none'});
            $('.scrollabout').css({'display': 'block'});
            $('.scrollservices').css({'display': 'none'});
            $('.scrollcontact').css({'display': 'none'});
        }
        if ($(window).scrollTop() < $('.first-screen').height()/2 ){
            $('.scroll').css({'display': 'block'});
            $('.scrollabout').css({'display': 'none'});
            $('.scrollservices').css({'display': 'none'});
            $('.scrollcontact').css({'display': 'none'});
        }
    });