$(function(){
    //sk them
    $('#addTaskBtn').click(function (e) { 
        e.preventDefault();
        let taskName = $('#taskInput').val().trim();
        if(taskName === ''){
            alert('Vui lòng nhập tên task trước khi thêm!')
            return;
        }
        let taskHtml = `
        <li class = "list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input type="checkbox" class = "form-check-input me-2 taskCheckBox">
                <span class = "taskName">${taskName}</span>
            </div>
            <button class = "btn btn-danger btn-sm deleteTaskBtn">Xóa</button>
        </li>`
        $('#taskList').append(taskHtml);
        $('#taskInput').val('')
        $('#checkAll').removeClass('d-none');
    });

    //sk xoa
    //Sử dụng event delegation (ủy thác sự kiện) => gắn event listener cho phần tử cha thay vì gắn hàng loạt cho phần tử con
    $('#taskList').on('click', '.deleteTaskBtn', function () {
        //.closest(): đi lên, tìm phần tử cha gần nhất khớp với selector truyền vào - trả về 1 hoăc 0 phần tử
        $(this).closest('li').remove();
        if($('#taskList li').length === 0) {
            $('#checkAll').addClass('d-none')
        }
    });

    $('#taskList').on('change', '.taskCheckBox', function () {
        //.siblings(): đi ngang, tìm phần tử ngang hàng chung cha với selector truyền vào - trả về nhiều hoặc 0 phần tử
        $(this).siblings('.taskName').toggleClass('completed');

        let totalCheckboxes = $('.taskCheckBox').length;
        let checkedCheckboxes = $('.taskCheckBox:checked').length;

        $('#checkAllTask').prop('checked', totalCheckboxes === checkedCheckboxes);
    });

    $('#checkAllTask').change(function (e) { 
        e.preventDefault();
        let isChecked  = $(this).prop('checked')
        $('.taskCheckBox').prop('checked', isChecked)
        $('.taskName').toggleClass('completed', isChecked)
        $('#deleteAllBtn').toggleClass('d-none', !isChecked)
    });

    $('#deleteAllBtn').click(function (e) { 
        e.preventDefault();
        $('.taskCheckBox:checked').closest('li').remove()
        $('#checkAllTask').prop('checked', false)
        $('#deleteAllBtn').addClass('d-none');
        if($('#taskList li').length === 0) {
            $('#checkAll').addClass('d-none')
        }
    });
});