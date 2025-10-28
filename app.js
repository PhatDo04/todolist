$(function(){
    //Thêm thành phần vào thành phần đã có để cùng thực hiện 1 hành động
    //Xây 1 đối tượng jquery mới sau đó cùng thực hiện 1 hành động cụ thể
    //.add(bộ chọn)
    $('div').add('p').css('color', 'red')
    //.add(html)
    $('p').add('<p class = "hehe">tag p co class hehe</p>').appendTo('body');
    //.add(obj)
    $('div').add($('p').css('border', '1px solid black')).css('color', 'purple');
    //.add(bộ chọn, context)
    $('div').click(function() { 
        $('div').add('p', this).addClass('test')
    });

    //.remove()
    //loai bo cac thanh phan duoc xac dinh
    //.remove(): loại bỏ tất cả các thành phần được chọn
    $('.test1').remove()
    //.remove('Bộ chọn - selector'): loại bỏ các thành phần được xác định
    $('div').remove('.test1')

    //.addClass()
    //thêm class cho thành phần
    //.addClass(tên class)
    $('div').addClass('hehehe')
    //.addClass(function(index){...})
    $('ul li').addClass(function(index){
        return "list-" + index;
    })

    //.removeClass(): loại bỏ tất cả class có trong thành phần đc chọn
    //.removeClass('tên class'): loại bỏ tên class cụ thể

    //.after()
    //chèn nội dung hoặc di chuyển thành phần ra ngay sau(bên ngoài) thành phần đc chọn
    //thường dùng trong slide/ chuyển động lặp lại của hình
    //.after(context)
    $('div').after("<hr>")
    $('div').after($('p'))
    //.after(function(index){...})
    $('div').after(function(){
        return "<p>" + this.className + "</p>"
    })

    // .before()
    
    //insertAfter(Mục tiêu)
    $('<li>3</li>').insertAfter('.li2');
    //insertBefore(Mục tiêu)
    $('<li>0</li>').insertBefore('.li1');

    //tương tự after/insertAfter nhưng thay vì thêm vào sau (bên ngoài) 
    //thì thêm/di chuyển vào cuối (bên trong) phần được chọn
    //append
    $('ul').append('<li>4</li>')
    $('ul').append($('.li1'))
    $('ul').append(function(){
        return "<li>" + 6 + "</li>"
    })
    //appendTo
    $('<li>7</li>').appendTo('ul')

    //prepend và prependTo tương tự append và appendTo nhưng thay vì chèn/di chuyển vào cuối thì chèn/di chuyển vào đầu

    //.attr()
    //Lấy giá trị hoặc thêm thuộc tính (attribute)cho thành phần
    //.attr('tên thuộc tính')
    var hrefAttr = $('a').attr('href')
    $('.test').html(hrefAttr)
    //.attr('tên thuộc tính','giá trị thuộc tính')
    $('a').attr('href','link-new')

    //.html()
    //Lấy nội dung hoặc gán giá trị html cho thành phần
    //.html(): lấy nội dung
    var spanHtml = $('span').html()
    $('.btn1').click(function(){
        alert(spanHtml)
    })
    //.html('nội dung html'): gán nội dung html cho thành phần
    $('.btn2').click(function(){
       $('ul').html('<li>html btn</li')
    })

    //.text(): lấy or gán nội dung text cho thành phần
    //.val()
    //Lấy giá trị hiện tại của thành phần, thay đổi giá trị thành phần (value)
    //Lấy giá trị đầu tiên nếu thành phần là 1 danh sách (value)

    //.change()
    //Xác định một thành phần đã được thay đổi
    //Thường dùng để xử lý các thành phần ủa form như input/textarea/btn
    //.change(function(){...})
    $('input').change(function (e) { 
        e.preventDefault();
        $('.spanChange').text('Trường nhập đã thay đổi')
    });

    //.clone()
    //Tạo 1 bản sao cho thành phần
    //Thường dùng kết hợp với .after() or .before() để tạo trình diễn hình ảnh trong slide
    //Ứng dụng trong xử lý thông tin form, như tạo thêm giá trị add more, ...
    $('.spanChange').after('<br>')
    $('.spanChange').after($('span').clone())

    //.height()
    //Xác định chiều cao cho thành phần
    //VD: Xác định chiều cao window, ... chỉnh chiều cao cho 2 phần = nhau
    //.height() xác định chiều cao
    $('.div-01').add('p').css('height', '10px')
    var hDiv = $('.div-01').height()
    $('.spanChange').text('Chiều cao: ' + hDiv + 'px')
    //.height(n) gán giá trị chiều cao n cho thành phần

    //.width() tương tự 
})