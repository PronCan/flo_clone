$('body div.wrap').prepend('<header>');
$('body div.wrap').append('<footer>');

$('header').load('./include.html header>div', headers);
$('footer').load('./include.html footer>div');

let idx = localStorage.idx || 0;

function headers() {
    $('header nav a').eq(idx).removeClass('active_text');

    $('header nav a').eq(idx).addClass('active_text');
    $('header nav p').click(function() {
        idx = $(this).index();
        // console.log('nav onclick idx: ', idx);

        localStorage.idx = idx;
    });
}