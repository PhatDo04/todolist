$(function(){
    //.fadeIn()
    //Hiển thị các thành phần với hiệu ứng rõ dần
    //Ứng dụng: Trong menu, khi hover sẽ xuất hiện menu con
    //.fadeIn(Độ bền): độ bền có thể là số có thể là chữ (slow, fast, ...)
    $('.btn1').click(function (e) { 
        e.preventDefault();
        $('.test03').fadeIn(2000);
        $('.test02').fadeIn('slow');
        $('.test01').fadeIn();
        $('.test00').fadeIn('fast');
    });
    //.fadeIn(Độ bền, function(){})
    $('.btn2').click(function (e) { 
        e.preventDefault();
        $('.test03').fadeIn(2000, function () {
            $(this).css('background-color', 'red')
        });
    });

    //.fadeOut()
    //Ẩn các thành phần phù hợp với hiệu ứng mờ dần(fade)
    //Ứng dụng: trong menu, khi hover sẽ xuất hiện menu con, mouseout sẽ ẩn menu con
    //.fadeOut(Độ bền): độ bền có thể là số có thể là chữ (slow, fast, ...)
    $('.btn3').click(function (e) { 
        e.preventDefault();
        $('.test03').fadeOut(2000);
        $('.test02').fadeOut('slow');
        $('.test01').fadeOut();
        $('.test00').fadeOut('fast');
    });
    //.fadeOut(Độ bền, function(){})
    $('.btn4').click(function (e) { 
        e.preventDefault();
        $('.test03').fadeOut(2000, function () {
            $('.test03').fadeIn(2000);
        });
    });

    //.fadeToggle()
    //Làm hiển thị(display: block;) hoặc biến mất(display: none;) thành phần kèm hiệu ứng mờ (opacity)
    //Ứng dụng: trong menu, khi hover sẽ xuất hiện hoặc ẩn menu con
    $('.btn5').click(function (e) { 
        e.preventDefault();
        $('.test01').fadeToggle('slow')
    });
    //.fadeToggle(Độ bền,'easing')
    //Easing có thể sử dụng swing hoặc linear
    $('.btn6').click(function (e) { 
        e.preventDefault();
        $('.test01').fadeToggle('500000','swing')
        $('.test02').fadeToggle('500000','linear')
    });
})