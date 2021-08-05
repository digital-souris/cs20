$(document).ready(function () {
    $('.footer__top').click(function () {
        var body = $('html, body');
        body.animate({scrollTop: 0}, 500)
    })
    $('.footer__title').click(function () {
        var parent = $(this).parent()
        parent.find('.footer__list').slideToggle()
    })
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
        if ($(this).find('.share2').length) {
            $('.ya-share2__popup').toggleClass('ya-share2__popup_visible')
        }
    })
})
