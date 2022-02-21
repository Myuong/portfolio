// Swiper 화면 스크롤

var slideNav = ['About me', 'about', 'Works', 'Work1', 'Work2', 'Work3', 'Work3'];
var swiper = new Swiper('.swiper-container', {
    /*effect: 'fade',*/
    speed: 500,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (slideNav[index]) + '</span></div>';
        }
    },
    on: {
        reachEnd: function () {
        swiper.mousewheel.disable();
        }
    }
    });
    window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        swiper.mousewheel.enable();
    } else if (event.deltaY > 0) {
    }
});



$(function(){
    $('.swiper-pagination-bullet:nth-of-type(1)').click(function(){
        $('html').animate({scrollTop : 0})
    });
    $('.swiper-pagination-bullet:nth-of-type(3)').click(function(){
        $('html').animate({scrollTop : 0})
    });


    //nav contact 클릭시 아래로
    $('.pagination3').click(function(){
        $("html, body").animate({ scrollTop: $(document).height() },1000,'swing');
    });

    //nav arrow_top 클릭시 위로
    $('.arrow_top').click(function(){
        $('html,body').animate({scrollTop : 0})
    })
});

//모바일 창 오픈시

function winOpen(){
    window.open('https://myuong.github.io/portfolioSite_BIFAN_mobile_renewal/','popup','width=500,height=960');
}
