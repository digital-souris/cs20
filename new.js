$(document).ready(function(){

    $(document).on('click', '.load_more', function(){

        var targetContainer = $('.product-item__wrap'),          //  Контейнер, в котором хранятся элементы
            url =  $('.load_more').attr('data-url');    //  URL, из которого будем брать элементы

        if (url !== undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'html',
                success: function(data){

                    //  Удаляем старую навигацию
                    $('.catalog__info-view').remove();

                    var elements = $(data).find('.product-item'),  //  Ищем элементы
                        pagination = $(data).find('.catalog__info-view');//  Ищем навигацию

                    targetContainer.append(elements);   //  Добавляем посты в конец контейнера
                    targetContainer.append(pagination); //  добавляем навигацию следом

                }
            })
        }

    });
    $('.catalogs__list').each(function () {
        $(this).find('li').each(function (index) {
            if (index > 20) {
                $(this).hide()
            }
        })
        if ($(this).find('li').length > 19) {
            $(this).find('.catalogs__all').show()
        }
    })

    $('.catalogs__all').click(function (e) {
        e.preventDefault()
        $(this).parent().find('li').show()
        $(this).hide()
        return false
    })

    $('.footer__top').click(function () {
        var body = $('html, body');
        body.animate({scrollTop: 0}, 500)
    })
    $('.footer__title').click(function () {
        var parent = $(this).parent()
        parent.find('.footer__list').slideToggle()
    })
    $('[data-basket]').on('click', function(){
        // var count = $(this).data('count');
        var count = $(this).parents('[data-parent]').find('[data-count]').val();
        var product_id = $(this).data('basket');
        var action = 'add';
        console.log(product_id);
        $.ajax({
            dataType: 'json',
            data: {'count':count, 'action':action, 'product_id':product_id},
            type: 'POST',
            url: '/ajax/card.php',
            success: function(response){
                // if (response.status)
                // {
                //  console.log('----------------->',response.total_price);
                //  response.total_price =  response.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                //  $(document).find('[data-totalBasket]').html(response.total_price+'₽');
                //  // $('[data-totalBasket]').html(response.total_price+'₽');
                //  $('[data-totalMob]').html(response.total_price+'₽');
                //  $('[data-allCount]').html(response.total_quantity);
                // }
            }
        });
    });

    $('.topline__filter').click(function () {
        $('.filter[data-theme=main]').toggleClass('is-open')
    })
    $('.mobile-filter__cross').click(function () {
        $('.mobile-filter').removeClass('is-open')
    })
    $('.mobile-filter__body a').click(function (e) {
        e.preventDefault()
        if ($(this).attr('data-theme')) {
            $('.mobile-filter[data-theme='+$(this).attr('data-theme')+']').addClass('is-open')
        }
    })
    $('.mobile-filter__arrow').click(function () {
        $(this).closest('.mobile-filter').removeClass('is-open')
    })
    $('.news__footer a').click(function () {
        console.log($(this).find('.ya-share2').length)
        if ($(this).find('.ya-share2').length) {
            $('.ya-share2__popup').toggleClass('ya-share2__popup_visible')
            return false
        }
    })
    $('.order__right a, .order__mobile').click(function (e) {
        e.preventDefault()
        var parent = $(this).closest('.order-item')
        $(parent).toggleClass('is-open')
        var content = $(this).closest('.order-item').find('.order-item__content')
        $(content).slideToggle()
        if ($(this).hasClass('order__mobile')) {
            $(this).toggleClass('active')
        }
        else {
            if ($(parent).hasClass('is-open')) {
                $(this).text('Скрыть')
            } else {
                $(this).text('Подробности')
            }
        }
        return false
    })
    $('.header__hamburger').click(function () {
        $('.mobile-nav').toggleClass('is-open')
    })
    $('.mobile-nav .mobile-filter__cross').click(function () {
        $('.mobile-nav').removeClass('is-open')
    })
    $('.catalogs__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1
    })
    $('.first-slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: 40,
        slidesToShow: 3,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: 10,
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
        ]
    })
    $('.catalogs .nav-tabs a').click(function (e) {
        e.preventDefault()
        var link = $(this).attr('href')
        if (!$(link).hasClass('active')) {
            $('.catalogs .nav-link').removeClass('active')
            $(this).addClass('active')
            $('.catalogs .tab-pane').removeClass('active')
            $(link).addClass('active')
        }
        return false
    })
    $('.asks__header').click(function() {
        var parent = $(this).closest('.asks__item')
        $(parent).find('.asks__body').slideToggle()
        $(parent).find('.asks__body').toggleClass('active')
        if($(parent).find('.asks__body').hasClass('active')) {
            $(this).find('span').text('-')
        }
        else {
            $(this).find('span').text('+')
        }
    
    })
    $('.c-dropdown__title').click(function() {
        $(this).parent().toggleClass('is-active')
    })
    $('.open-modal').click(function(e) {
        e.preventDefault()
        $('.modal').hide()
        $('.modal[data-auth='+ $(this).attr('data-auth') +']').css("display", "flex").fadeIn()
        return false
    })
    $('.modal__cross').click(function() {
        $('.modal').fadeOut()
    })
    $('.js-add-in-cart').click(function (e) {
        e.preventDefault()
        $(this).parent().addClass('show-counter')
        $(this).parent().find('.product__count').find('span').text(1)
        return false
    })
    $('.js-product-minus').click(function () {
        $(this).parent().find('span').text($(this).parent().find('span').text() - 1)
        if ($(this).parent().find('span').text() <= 0) {
            $(this).closest('.product-item__bottom').removeClass('show-counter')
        }
    })
    $('.js-product-plus').click(function () {
        $(this).parent().find('span').text(parseInt($(this).parent().find('span').text()) + 1)
    })
});


