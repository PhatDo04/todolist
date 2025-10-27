$(function(){
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
})