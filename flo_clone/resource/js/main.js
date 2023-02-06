let json;
let idx_swiper = 0;
let idx_swiper_pre;
$(document).ready(function () {
    addSwiperData();
});

$(window).on('load', function() {
    $('header div div nav p a').removeClass(); //remove menu select blue text
    // doSwiper();
    actionSwiper();
});

let elSwiper;
let elSwiperBtn;
    

function actionSwiper() {
    elSwiper = document.querySelectorAll('.swiper>div');
    elSwiperBtn = document.querySelectorAll('.swiper_controller button');

    console.log(elSwiper);

    $('.swiper-btn-inner-prev').click(() => {
        console.log("prev");
        idx_swiper_pre = idx_swiper;
        elSwiper[idx_swiper_pre].classList.add('hidden');
        idx_swiper--;        
        if(idx_swiper == -1) idx_swiper = 4;
        elSwiper[idx_swiper].classList.remove('hidden');

    });

    $('.swiper-btn-inner-next').click(() => {
        console.log("next");
        idx_swiper_pre = idx_swiper;
        elSwiper[idx_swiper_pre].classList.add('hidden');
        idx_swiper++;        
        if(idx_swiper == 5) idx_swiper = 0;
        elSwiper[idx_swiper].classList.remove('hidden');
    });
}

// main swiper
function addSwiperData() {
    // load swipe data
    $.getJSON('./data/main_data.json', function(data) {
        json = data;
        setSwiperData();
    });
}
function setSwiperData() {
    var html = '';

    for(let j=0; j<json.swiper_content.length; j++){
        html += `<div class="swiper_content`;
        if(j!=0) {
            html += ` hidden">`;
        } else {
            html += `">`;
        }
        html += `">`;

        html += `<div class="swiper_content_left">
                <div>
                    <h3>${json.swiper_content[j].title}</h3>
                    <p>총 ${json.swiper_content[j].list.length}곡<span class="bar">|</span>${json.swiper_content[0].save_date}</p>
                </div>
                <button></button>
                </div>`;
        j == 0 ? html += `<div class="swiper_content_right" style="transform: translateY(-170px) !important;"><ul>`
                : html += `<div class="swiper_content_right"><ul>`;

        for(let i=0; i<json.swiper_content[j].list.length; i++) {
            if(i==json.swiper_content[j].list.length/2) {
                html += `</ul><ul>`;
            }
            html += `<li>`;
            html += `<img src="${json.swiper_content[j].list[i].url}">`;
            html += `<div>`;
            html += `<p class="swiper_title">${json.swiper_content[j].list[i].l_title}</p>
            <p class="swiper_artist">${json.swiper_content[j].list[i].l_artist}</p>`;
            html += `</div></li>`
        }
        html += `</ul></div></div>`;
    }
    // console.log("json.swiper_content.length : ", json.swiper_content.length);
    $('.swiper').prepend(html);
}

function doSwiper() {
    var swiper = new Swiper(".swiper", {
        navigation: {
            nextEl: ".swiper-btn-inner-next",
            prevEl: ".swiper-btn-inner-prev"
        }
    });
}