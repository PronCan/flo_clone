let idx = localStorage.idx || 0;

$('.header_wrap_left p').on('click', () => {
    // e.preventDefault();
    let url = $(this).attr('href');
    let idx = $(this).index();
    console.log(idx);
});

function pageLoad(index, url) {
    // $('header div div nav p a').removeClass('active_text');
    // $('.header_wrap_left p a').eq(index).addClass('active_text');
    console.log(index);
    $('header').eq(index).addClass('active_text');
}
pageLoad(0, 'sub1.html');

$(window).on('popstate', () => {
    let idx = history.state.page;
    let url = history.state.url;

    pageLoad(idx, url);
});