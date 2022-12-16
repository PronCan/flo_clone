let json;
$(document).ready(function () {
    addSwiperData();
   
});

$(window).on('load', function() {
    $('header div div nav p a').removeClass();
});

// main swiper
function addSwiperData() {
    // load swipe data
    $.getJSON('./data/main_data.json', function(data) {
        json = data;
        setSwiperData();
    });
}
function setSwiperData() {
    var html;
    html += `<div class="swiper_content">`;
    html += `<div class="swiper_content_left">
            <div>
                <h3>${json.swiper_content[0].title}</h3>
                <p>총 ${json.swiper_content[0].list.length}곡<span class="bar">|</span>${json.swiper_content[0].save_date}</p>
            </div>
            <button></button>
            </div>`;
    html += `<div class="swiper_content_right"><ul>`;
    for(let i=0; i<json.swiper_content[0].list.length; i++) {
        html += `<li>`;
        html += `<img src="${json.swiper_content[0].list[i].url}">`;
        html += `<div>`;
        html += `<p class="swiper_title">${json.swiper_content[0].list[i].l_title}</p>
        <p class="swiper_artist">${json.swiper_content[0].list[i].l_artist}</p>`;
        html += `</div></li>`
    }
    html += `</ul></div>`;
    console.log(html);
    $('.swiper').prepend(html);
}