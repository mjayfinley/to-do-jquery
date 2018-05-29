let newTask = $("#newTask")
let taskBtn = $("#taskBtn")
let pendingTasks = $("pendingTasks")
let taskList = $("#taskList")
let completedTasks = $("#completedTasks")
let completedTaskList = $("#completedTaskList")


let makeList = function(taskToAdd) {
  let newListItem = $("<li id='task'></li>")
  let checkBox = $("<input type='checkbox' class='checkbox'>")
  let newItem = $("<label></label>")
  let newBtn = $("<button class='removeButton'>Remove</button>")

  newListItem.append(checkBox)
  .append(newItem.html(taskToAdd))
  .append(newBtn)

  checkBox.change(function() {
    if (this.checked) {
      completedTaskList.append(newListItem)
    }
    else {
      taskList.append(newListItem)
    }
  })

  newBtn.click(function() {
    $(this).parent().remove();
  })

  return newListItem
}



$(document).ready(function() {

  $("#taskList").sortable();

  taskBtn.click(function() {
    let listItem = makeList(newTask.val())

    taskList.append(listItem)
    newTask.val("")
  })

})
