AOS.init({
    easing: 'ease-in',
    throttleDelay: 5000
});
function swipeCarousel() {

    $(".carousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'right') $(this).carousel('prev');
            if (direction == 'left') $(this).carousel('next');
        },
        allowPageScroll: "vertical"
    });
};

$(function () {
        //revealOnScroll
    var $window = $(window),
     win_height_padded = $window.height() * 1.1;
    $window.on('scroll', revealOnScroll);
    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    $this.addClass('animated ' + $this.data('animation'));
                    $this.css('animation-delay', $this.data('timeout'));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }

                if ($this.data('duration')) {
                    $this.addClass('animated ' + $this.data('animation'));
                    $this.css('animation-duration', $this.data('duration'));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
        $(".revealOnScroll.animated").each(function (index) {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded < offsetTop) {
                $(this).removeClass('animated ' + $(this).attr("data-animation"))

            }
        });

    }
    revealOnScroll();
    //revealOnScroll


});

$(document).ready(function () {
    $('.blue-breadcrumb ul li a').click(function () {
        if (!$(this).parent().hasClass("active")) {
            $('.blue-breadcrumb ul li.active').removeClass("active");
            $(this).parent().addClass("active");
        }
    });
    $('#productDetailSlider .product-detail-slider .slider-nav .slick-slide').click(function () {
        var img_id = $(this).children(".img").children("img").attr("src");
        $('.product-detail-container .product_left_image .wrapper .product-detail-slider .slider-nav .slick-slide .img img').each(function () {
            if ($(this).attr("src") == img_id) {
                $(this).parent(".img").parent(".slick-slide").click();
            }
        });
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        infinite: false,

    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,

    });
    $('product-detail-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    $('.comment-box-container .last-box .button-2').click(function () {
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            //$('.comment-write').removeClass("active");
            $('.comment-write').slideToggle(750);
        } else {
            $(this).addClass("active");
            //$('.comment-write').addClass("active");
            $('.comment-write').slideToggle(750);

        }
    });
    $('.product-detail-slider .slider-for .slick-list .slick-slide').click(function () {
        if ($('#productDetailSlider').hasClass("active")) {
            $('#productDetailSlider').removeClass("active")
        } else {
            $('#productDetailSlider').addClass("active")
        }
    });
    $('.full-width-slider .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoPlay: true,
        autoPlayTimeout: 6000,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1
            }
        }
    });


    var $owl = $('.category_right_box .product-img .owl-carousel');
    $owl.owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        autoPlay: false,
        smartSpeed: 700,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    function refreshOwl() {
        $owl.trigger('refresh.owl.carousel');
    }
    $('.category-filter-section .wrapper .filter-1-button').click(function () {
        if ($('.section.category-product-section').hasClass("filter-active")) {
            $('.section.category-product-section').removeClass("filter-active");
            setTimeout(function () {
                refreshOwl();
            }, 750);
        } else {
            $('.section.category-product-section').addClass("filter-active");
            setTimeout(function () {
                refreshOwl();
            }, 750);

        }
    });
    $('.category-product-section .category_left_box .wrapper .item > a').click(function () {
        if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).next(".left_drop_menu").slideToggle(750);
        } else {
            $(this).parent().addClass("active");
            $(this).next(".left_drop_menu").slideToggle(750);
        }
    });


    $('.category-product-section .category_left_box .wrapper .item.active .left_drop_menu').slideToggle(750);
    $('.section .accordion-box .accordion_button.active').next(".accordion_content").children(".item").slideToggle().addClass("active");

    $('.section .accordion-box .accordion_button').click(function () {

        var button = $(this).attr("data-id");
        if ($(this).hasClass("active")) {
            $(this).next(".accordion_content").children(".item.active").slideToggle();
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
            $('.section .accordion-box .accordion_content .item').each(function () {
                if (button == $(this).attr("data-id")) {
                    $(this).slideToggle();
                    $(this).addClass("active");
                }

            });
        }
    });
    $('.section .cart-total .wrapper .item .promotion-code').click(function () {
        if ($(this).next(".promotion-code-input").hasClass("active")) {
            $(this).next(".promotion-code-input").removeClass("active")
        } else {
            $(this).next(".promotion-code-input").addClass("active")
        }
    })
    $('.section .cart-total .wrapper .item .promotion-code-input input').keyup(function () {
        if ($(this).val() != "") {
            $(this).next().addClass("active");
        } else {
            $(this).next().removeClass("active");

        }
    });

    $('.comment-write .right .input > *').keyup(function () {
        if ($(this).val() != "") {
            $(this).next().addClass("active");
        } else {
            $(this).next().removeClass("active");

        }
    });

    $('.section .form-container .input input').keyup(function () {
        if ($(this).val() != "") {
            $(this).next().addClass("active");
        } else {
            $(this).next().removeClass("active");

        }
    });
    $('.header .mobile-menu-button').click(function () {
        $('.shopping-cart-box.active').removeClass("active");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("header").removeClass("active");
        } else {
            $(this).addClass("active");
            $("header").addClass("active");


        }
    });
    $('.fix-modal-container .close-button').click(function () {
        if ($('.fix-modal-container').hasClass("active")) {
            $('.fix-modal-container').removeClass("active");
        }
    });
    $('.footer-bottom .wrapper .right .language-modal-button').click(function () {
        if ($('.fix-modal-container.language-modal').hasClass("active")) {
            $('.fix-modal-container.language-modal').removeClass("active")
        } else {
            $('.fix-modal-container.language-modal').addClass("active")
        }
    });

    $('.select-dropdown .button').click(function () {
        event.stopPropagation();
        if ($(this).next().hasClass("active")) {
            $(this).next().removeClass("active");
        } else {
            $(this).next().addClass("active");
        }
    });
    $('body').on('click', function (ev) {
        $('.search-box').removeClass("active");
        $('.shopping-cart-box').removeClass("active");
        $('.mega-menu').removeClass("active");
        $('.header-top .wrapper ul li').parent().removeClass("active");
        $('.header-top').removeClass("active");
        $('.mega-menu .wrapper .right .right-wrapper .item.active').removeClass("active");
        $('.select-dropdown .select_dropdown.active').removeClass("active");
    });

    $('.select-dropdown .select_dropdown').click(function () {
        event.stopPropagation();
    });
    $('.search-box').click(function () {
        event.stopPropagation();
    });
    $('.shopping-cart-button').click(function () {
        event.stopPropagation();
    });

    $('.mega-menu').click(function () {
        event.stopPropagation();
    });

    $('.mega-menu .wrapper .left ul li a').click(function () {
        event.stopPropagation();

        if (!$(this).parent().hasClass("active")) {
            var button = $(this).attr("data-link");
            $('.mega-menu .wrapper .right .right-wrapper .item').each(function () {
                if ($(this).attr("data-id") == button) {
                    $('.mega-menu .wrapper .right .right-wrapper .item.active').removeClass("active");
                    $(this).addClass("active");
                }
            });
            $('.header-top .wrapper ul li a').each(function () {
                if ($(this).attr("data-link") == button) {
                    $('.header-top .wrapper ul li.active').removeClass("active");
                    $(this).parent().addClass("active");
                }
            });



            $('.mega-menu .wrapper .left ul li.active').removeClass("active");
            $(this).parent().addClass("active");

        }

    });
    $('.header-top .wrapper ul li a').click(function () {
        event.stopPropagation();

        if ($('.mega-menu').hasClass("active") && $(this).parent().hasClass("active")) {
            $('.mega-menu').removeClass("active");
            $(this).parent().removeClass("active");
            $('.header-top').removeClass("active");
            $('.mega-menu .wrapper .right .right-wrapper .item.active').removeClass("active");

        } else {
            var button = $(this).attr("data-link");
            $('.mega-menu .wrapper .right .right-wrapper .item').each(function () {
                if ($(this).attr("data-id") == button) {
                    $('.mega-menu .wrapper .right .right-wrapper .item.active').removeClass("active");
                    $(this).addClass("active");
                }
            });
            $('.mega-menu .wrapper .left ul li a').each(function () {
                if ($(this).attr("data-link") == button) {
                    $('.mega-menu .wrapper .left ul li.active').removeClass("active");
                    $(this).parent().addClass("active");
                }
            });



            $('.header-top .wrapper ul li.active').removeClass("active");
            $('.mega-menu').addClass("active");
            $(this).parent().addClass("active");
            $('.header-top').addClass("active");
        }
    });

    $('.header-top .search_button').click(function () {
        event.stopPropagation();

        if ($('.search-box').hasClass("active")) {
            $('.search-box').removeClass("active");
        } else {
            $('.search-box').addClass("active");
        }
    });
    $('.shopping-cart-button').click(function () {
        event.stopPropagation();
        $('header.active').removeClass("active");
        $('body .header .mobile-menu-button.active').removeClass("active");
        $('.mega-menu').removeClass("active");
        $('.header-top .wrapper ul li').parent().removeClass("active");
        $('.header-top').removeClass("active");

        if ($('.shopping-cart-box').hasClass("active")) {
            $('.shopping-cart-box').removeClass("active");
        } else {
            $('.shopping-cart-box').addClass("active");
        }
    });
    $('.scrollTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    $('#DekstopCarousel.carousel').carousel({
        interval: 4500,
        pause: "hover",
    });

    $('.category-product-section .category_right_box .wrapper .item .product-img .carousel').carousel({
        interval: 30000,
        pause: "hover",
    });

    $('.homepage.banner .scroll-down .down-button').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-container > .section:first-child').offset().top
        }, 800);
    });
    if ($('.section .cart-total .wrapper .item .promotion-code-input input').val() != "") {
        $(this).next().addClass("active");
    } else {
        $(this).next().removeClass("active");

    }
    if ($('.section .form-container .input input').val() != "") {
        $(this).next().addClass("active");
    } else {
        $(this).next().removeClass("active");

    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.scrollTop').removeClass("d-none");
        $('.scrollTop').removeClass("animatedOut");
        $('.scrollTop').addClass("animatedIn");
    } else {
        $('.scrollTop').removeClass("animatedIn");
        $('.scrollTop').addClass("animatedOut");
    }
});

var clickEvent = (function () {
    if ('ontouchstart' in document.documentElement === true)
        //Dekstop
        console.log("");
    else
        //Mobile
        swipeCarousel();
})();
