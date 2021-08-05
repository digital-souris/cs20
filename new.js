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
});


