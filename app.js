$(function(){
    $('.test').css('color','#ff0000')
    $('.test').css('border', '1px solid blue')

    $('#hehe').css('color','gray')
    $('#hehe1').css('color','gray')
    $('#hehe2').css('color','gray')

    $('.list, #hehe').css('color', 'purple')

    //chon cac thanh phan cu the
    $('ul li:eq(-3)').css('border', '1px solid black')
    $('ul li:eq(1)').css('border', '1px solid black')
    $('ul li:eq(1)').css('border', '1px solid black')

    //chon cac thanh phan lon hon gt(-2)
    $('ul li:gt(-2)').css('border', '1px solid red')

    //chon cac thanh phan nho hon lt(2)
    $('ul li:lt(2)').css('border', '5px solid yellow')

    //chon cac thanh phan o vi tri chan :even

    //chon cac thanh phan o vi tri le :odd

    //chon phan tu dau tien :first-child

    //chon phan tu dau tien :last-child

    // chon thanh phan thu 'n' trong thanh phan cha; goc tinh tu thanh phan dau dien 
    // :nth-child(n)
    // n co the la so; co the la function

    // [attribute="value"]
    // giup chon cac thanh phan voi gia tri xac dinh
    // => lay or gan gia tri thuoc tinh (attribute) cho thanh phan

    
})