$(function(){
    //sk them
    $('#addTaskBtn').click(function (e) { 
        e.preventDefault();
        let taskName = $('#taskInput').val().trim();
        if(taskName === ''){
            alert('Vui lòng nhập tên task trước khi thêm!')
            return;
        }
        let taskHtml = `<li class = "list-group-item d-flex justify-content-between alight-items-center">${taskName} <button class = "btn btn-danger btn-sm deleteTaskBtn">Xóa</button></li>`
        $('.list-group').append(taskHtml);
        $('#taskInput').val('')
    });

    //sk xoa
    $('.list-group').on('click', '.deleteTaskBtn', function () {
        $(this).closest('li').remove();
    });
});