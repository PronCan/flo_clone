
$(window).on('load', function() {
    $('header div div nav p a').removeClass();
    // load swipe data
    $.getJSON('./data/main_data.json', function(data) {
        console.log(data);
    });
    
});

// main swiper