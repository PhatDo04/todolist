$(function(){
    //.click()
    //Kích hoạt sự kiện click trên thành phần ràng buộc xử lý một sự kiện 'click' trong javascript
    //Ứng dụng: thực hiện hành động gì đó khi click chuột vào thành thành phần
    //.click()
    //.click(function(){})

    //.hover()
    //Kết hợp xử lý 2 sự kiện: di chuột vào và rời chuột ra khỏi thành phần (mouseenter/mouseleave)
    //Ứng dụng: thực hiện thành động gì đó khi di hover chuột
    //.hover(xử lý mouse enter, xử lý mouse leave)\
    $('p').hover(function () {
            // over
            $(this).css('background-color', 'green')
        }, function () {
            // out
            $(this).css('background-color', 'aqua')
        }
    );

    //.bind()
    //Sử dụng để đính kèm xử lý thêm sự kiện cho thành phần
    //Ứng dụng: sử dụng kết hợp giữa 2 sự kiện load và resize, như khi load window hay resize window thì nội dung sẽ được xử lý
    //.bind('sự kiện', function)
    $('div.test').bind('click', function(){
        $('span.huhu').text('Đã click')
    })
    //.bind('sự kiện 1, sự kiện 2, sự kiện ...', function(){})
    $('div.bindn').bind('click dbclick', function(){
        $('span.hehe').text('N sự kiện')
    })

    //.resize()
    //Ràng buộc một xử lý sự kiện resize hoặc kích hoạt sự kiện trên thành phần
    //.resize(function(){...})
    $(window).resize(function () { 
        $('span.resize').html($(window).width())
    });
});