$(function(){
    //.css()
    //Thêm 1 hoặc nhiều style
    //.css('thuộc tính','giá trị')
    //.css('thuộc tính 1':'giá trị 1', 'thuộc tính 2':'giá trị 2', ... '':'')

    //.each()
    //Thực hiện 1 hành động cho mỗi phần tử, để làm điều này ta cần sử dụng phương thức $(this)
    $('li').each(function (index, element) {
        // element == this
        $(this).click(function () {
             $(this).addClass("list"+index);
        })
    });

    $('li').each(function (index, element) {
        // element == this
        $(this).hover(function () {
                // over
                $(this).addClass('over');
            }, function () {
                // out
                $(this).removeClass('over');
            }
        );
    });

    //.find()
    //Giúp tìm thành phần trong cha
    //.find(Bộ chọn)
    $('ul').find('.test').css('color','red');
    //.find(jquery object)
    $('ul').find($('p.test')).css('color','yellow');

    //.first()
    //Xác định phần đầu tiên trong thành phần dc chọn
    $('li').first().css('background-color', 'blue')

    //.last(): cuối
    //.length: độ dài
    var n = $('li').length;
    $('span').text(n);
});