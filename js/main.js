AOS.init();

/***** header *****/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.header').addClass('header_scroll')
    } else {
        $('.header').removeClass('header_scroll')
    }
});

/***** main_banner *****/

/***** sub_menu *****/
$('.sub_menu_wrap').hide();
$('.gnb li').mouseenter(function () {
    $(this).children('.sub_menu_wrap').stop().slideDown()
});
$('.gnb li').mouseleave(function () {
    $(this).children('.sub_menu_wrap').stop().slideUp()
});

$('.icon_sub_menu').hide();
$('.top_icons li').mouseenter(function () {
    $(this).children('.icon_sub_menu').stop().fadeIn(300)
});
$('.top_icons li').mouseleave(function () {
    $(this).children('.icon_sub_menu').stop().fadeOut(100)
});

/***** m_menu *****/
$('.mobile_btn a').click(function(){
    $('.mobile_menu').css({
        'margin-left': '0',
        'transition':'margin-left 0.5s'
    })
});
$('.close_btn a').click(function(){
    $('.mobile_menu').css({
        'margin-left': '100vw',
        'transition':'margin-left 0.5s'
    })
});

/***** main_new *****/
$(function () {
    var tabAnchor = $('.new_tabs li a'),
        tabPanel = $('.pro_new');

    tabAnchor.click(function (e) {
        e.preventDefault();

        tabAnchor.removeClass('active');
        $(this).addClass('active');

        tabPanel.hide();

        var $target = $(this).attr('href');
        // console.log($target);
        $($target).show();
    });
});

/***** main_review *****/
$(function () {
    var tabAnchor2 = $('.re_tabs li a'),
        tabPanel2 = $('.review_contents li');

    tabAnchor2.click(function (e) {
        e.preventDefault();

        tabAnchor2.removeClass('active');
        $(this).addClass('active');

        tabPanel2.hide();

        var $targets = $(this).attr('href');
        $($targets).show();
    });
});

/***** main_ad *****/
$(function () {
    var slides9 = document.querySelector('.ads'),
        slide99 = document.querySelectorAll('.ads li'),
        currentIdx = 0,
        slideCount = slide99.length,
        slideWidth = 1920,
        slideMargin = 0,
        prevBtn = document.querySelector('.adver_prev'),
        nextBtn = document.querySelector('.adver_next');

    slides9.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

    makeClone();
    function makeClone() {
        for (var i = 0; i < slideCount; i++) {
            var cloneSlide = slide99[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides9.appendChild(cloneSlide);
        }
        for (var i = slideCount - 1; i >= 0; i--) {
            var cloneSlide = slide99[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides9.prepend(cloneSlide);
        }
        updateWidth();
        setInitialPos();
        autoSlide();
    };

    function updateWidth() {
        var currentSlide = document.querySelectorAll('.ads li');
        var newSlideCount = currentSlide.length;

        var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
        slides9.style.width = newWidth;
    };

    function setInitialPos() {
        var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
        slides9.style.transform = 'translateX(' + initialTranslateValue + 'px)';
    }

    function moveSlide(num) {
        slides9.style.left = -num * (slideWidth + slideMargin) + 'px';
        currentIdx = num;

        if (currentIdx == slideCount || currentIdx == -slideCount) {

            setTimeout(function () {
                slides9.classList.remove('adver_animated');
                slides9.style.left = '0px';
                currentIdx = 0;
            }, 500);

            setTimeout(function () {
                slides9.classList.add('adver_animated');
            }, 600);
        }
    };

    function autoSlide() {
        timer = setInterval(() => {
            let ni = currentIdx + 1;
            if (ni === slides9.length) {
                ni = 0;
            };
            moveSlide(ni);
        }, 2000);
    };


    prevBtn.addEventListener('click', function () {
        moveSlide(currentIdx - 1);
    });
    nextBtn.addEventListener('click', function () {
        moveSlide(currentIdx + 1);
    });
});

/***** main_keyitems *****/
$(function () {
    var slides7 = document.querySelector('.keyitems_list'),
        slide7 = document.querySelectorAll('.keyitems_list li'),
        currentIdx = 0,
        slideCount = slide7.length,
        prevBtn7 = document.querySelector('.key_prev'),
        slideWidth = 290,
        slideMargin = 20,
        nextBtn7 = document.querySelector('.key_next');

    slides7.style.width = (slideWidth + slideMargin) * slideCount + 'px';

    function moveSlide(num) {
        slides7.style.left = -num * 310 + 'px';
        currentIdx = num;
    };

    nextBtn7.addEventListener('click', function () {
        if (currentIdx < slideCount - 1) {
            moveSlide(currentIdx + 1);
            console.log(currentIdx);
        };
    });
    prevBtn7.addEventListener('click', function () {
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        };
    });
});

$(function () {
    var slides8 = document.querySelector('.keyitems_list2'),
        slide8 = document.querySelectorAll('.keyitems_list2 li'),
        currentIdx = 0,
        slideCount = slide8.length,
        prevBtn8 = document.querySelector('.key_prev2'),
        slideWidth = 290,
        slideMargin = 20,
        nextBtn8 = document.querySelector('.key_next2');

    slides8.style.width = (slideWidth + slideMargin) * slideCount + 'px';

    function moveSlide(num) {
        slides8.style.left = -num * 310 + 'px';
        currentIdx = num;
    };

    nextBtn8.addEventListener('click', function () {
        if (currentIdx < slideCount - 1) {
            moveSlide(currentIdx + 1);
            console.log(currentIdx);
        };
    });
    prevBtn8.addEventListener('click', function () {
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        };
    });
});