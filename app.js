$(function () {
  const API_URL = "https://jsonplaceholder.typicode.com/todos";
  let nextId = 201;

  function drawTask(task) {
    let taskName = task.title;
    let checkedAttr = task.completed ? "checked" : "";
    let completedClass = task.completed ? "completed" : "";
    let taskHTML = `
                <li class = "list-group-item d-flex justify-content-between align-items-center" data-id="${task.id}">
                    <div>
                        <input type="checkbox" class = "form-check-input me-2 taskCheckBox" ${checkedAttr}>
                        <span class = "taskName ${completedClass}">${taskName}</span>
                    </div>
                    <button class = "btn btn-danger btn-sm deleteTaskBtn">Xóa</button>
                </li>
                `;
    $("#taskList").append(taskHTML);
  }

  function loadTasks() {
    $.get(API_URL + "?_limit=10", function (todos) {
      $.each(todos, function (index, todo) {
        drawTask(todo);
      });
      $("#checkAll").removeClass("d-none");
      $("#deleteAllBtn").removeClass("d-none");
    });
  }

  loadTasks();

  //sk them
  $("#addTaskBtn").click(function (e) {
    e.preventDefault();
    let taskName = $("#taskInput").val().trim();
    if (taskName === "") {
      alert("Vui lòng nhập tên task trước khi thêm!");
      return;
    }
    let newTask = {
      id: nextId++, // Tự tạo ID duy nhất và tăng dần
      title: taskName,
      completed: false,
    };
    $.post(API_URL, newTask, function (response) {
      console.log("Server lưu thành công", newTask);
      drawTask(newTask); // Dùng newTask vì đã có ID rồi
      $("#taskInput").val("");
      $("#checkAll").removeClass("d-none");
    });
  });

  //sk xoa
  //Sử dụng event delegation (ủy thác sự kiện) => gắn event listener cho phần tử cha thay vì gắn hàng loạt cho phần tử con
  $("#taskList").on("click", ".deleteTaskBtn", function () {
    //.closest(): đi lên, tìm phần tử cha gần nhất khớp với selector truyền vào - trả về 1 hoăc 0 phần tử
    let $taskLi = $(this).closest("li");
    let taskId = $taskLi.data("id");

    $.ajax({
      type: "DELETE",
      url: API_URL + "/" + taskId,
      success: function (response) {
        console.log("DELETE thành công", response);
        $taskLi.remove();
        if ($("#taskList li").length === 0) {
          $("#checkAll").addClass("d-none");
        }
      },
    });
  });

  $("#taskList").on("change", ".taskCheckBox", function () {
    //.siblings(): đi ngang, tìm phần tử ngang hàng chung cha với selector truyền vào - trả về nhiều hoặc 0 phần tử
    let $taskLi = $(this).closest("li");
    let taskId = $taskLi.data("id");
    let isCompleted = $(this).prop("checked");
    let taskName = $(this).siblings(".taskName");
    let totalCheckboxes = $(".taskCheckBox").length;
    let checkedCheckboxes = $(".taskCheckBox:checked").length;
    $.ajax({
      method: "PUT",
      url: API_URL + "/" + taskId,
      data: {
        completed: isCompleted,
      },
      success: function (response) {
        console.log("PUT Success", response);
        taskName.toggleClass("completed");
        $("#checkAllTask").prop(
          "checked",
          totalCheckboxes === checkedCheckboxes
        );
      },
    });
  });

  $("#checkAllTask").change(function (e) {
    e.preventDefault();
    let isChecked = $(this).prop("checked");
    $(".taskCheckBox").prop("checked", isChecked);
    $(".taskName").toggleClass("completed", isChecked);
    $("#deleteAllBtn").toggleClass("d-none", !isChecked);
  });

  $("#deleteAllBtn").click(function (e) {
    e.preventDefault();
    $(".taskCheckBox:checked").closest("li").remove();
    $("#checkAllTask").prop("checked", false);
    $("#deleteAllBtn").addClass("d-none");
    if ($("#taskList li").length === 0) {
      $("#checkAll").addClass("d-none");
    }
  });
});
