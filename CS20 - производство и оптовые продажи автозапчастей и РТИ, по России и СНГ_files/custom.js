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

});