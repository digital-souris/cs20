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
        $('.filter').toggleClass('is-open')
    })
})
