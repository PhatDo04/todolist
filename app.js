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
        //swing: nhanh rồi chậm dần
        $('.fadeSwing').fadeToggle(10000,'swing')
        //linear: tốc độ không đổi
        $('.fadeLinear').fadeToggle(10000,'linear')
    });
    //fadeToggle(Độ bền, function(){...})
    $('.btn7').click(function(e){
        e.preventDefault();
        $('div').fadeToggle(5000,'swing',function () {
            $(this).css('background-color','red');
        });
    })

    //.slideDown()
    //Hiển thị các thành phần với hiệu ứng chuyển động trượt (slide)
    //Ứng dụng: tạo menu slide, khi click or hover thì menu con sẽ slide xuống, hoặc có thể tạo Accordion
    //.slideDown(Độ bền)
    $('.btn8').click(function (e) { 
        e.preventDefault();
        $('div').slideDown();
    });
    //.slideDown(Độ bền, 'easing')
    //.slideDown(Độ bền, function(){...})

    //.slideUp()
    //Tương tự slideDown
    $('.btn9').click(function (e) { 
        e.preventDefault();
        $('div').slideUp();
    });

    //.slideToggle
    //Hiển thị/ẩn các thành phần với hiệu ứng trượt
    //Kết hợp của slideUp và slideDown
    $('.btn10').click(function (e) { 
        e.preventDefault();
        $('div').slideToggle();
    });


    //.toggle()
    //Hiển thị/ẩn các thành phần
    //.toggle(Độ bền)    
    //.toggle(Độ bền, 'easing')    
    //.toggle(Độ bền, function(){...})    
    $('.btn11').click(function (e) { 
        e.preventDefault();
        $('div').toggle('slow')
    });

    //.toggleClass()
    //Thêm hoặc loại bỏ class của thành phần
    //Cú pháp tương tụ toggle()

    //.hide()
    //Ẩn thành phần 
    //Thành phần được ẩn sẽ giống như style = "display: none;"
    //.hide(Độ bền)
    //.hide(Độ bền, function(){...})
    $('.btn12').click(function (e) { 
        e.preventDefault();
        $('div').hide();
    });

    //.show()
    //Hiện thành phần
    //Thành phần được hiện sẽ giống style = "display: block;"
    //Cú pháp tương tự .hide()

    //.animate()
    //Thực hiện một hình ảnh động (animate) tùy chỉnh của một tập hợp các thuộc tính css
    //Ứng dụng: sử dụng nhiều trong việc tạo ra hiệu ứng chuyển động
    //.animate(Thuộc tính, tốc độ)
    $('.btn13').click(function (e) { 
        e.preventDefault();
        $('img').animate({
            opacity: 0.25,
            left: "+=50"
        }, 1000)
    });
    //.animate(Thuộc tính, tốc độ, function)
    $('.btn14').click(function (e) { 
        e.preventDefault();
        $('img').animate({
            opacity: 0.25,
            left: "+=50"
        }, 1000, function(){
            $(this).after("<div style = 'display: block'>Animation complete</div>")
        })
    });

    //.setTimeout()
    //Xác định thời gian sau bao lâu thì thực hiện hành động
    //Ứng dụng: box quảng cáo sau 10s thì tự đóng lại
    //setTimeout(function(){...}, time)
    setTimeout(function(){
        alert("setTimeout")
    },2000)

    //.setInterval()
    //Xác định thời gian sau bao lâu thì thực hiện hành động và hành động này được thực hiện liên tục
    //Ứng dụng: tự động chuyển hình ảnh trong slider
    //Cú pháp tương tự setTimeout
    setInterval(function(){
        alert("setInterval")
    },3000)
})