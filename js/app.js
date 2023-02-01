const taskContainers = document.querySelectorAll('.task-container')
const tasks = document.querySelectorAll('.task')

let taskDragged

tasks.forEach(task => task.addEventListener('dragstart', dragstart))

taskContainers.forEach(taskContainer => {
  taskContainer.addEventListener('drop', dragDrop)
  taskContainer.addEventListener('dragover', dragOver)
})

function dragstart(e) {
  taskDragged = e.target
}

function dragOver(e) {
  e.preventDefault()
}

function dragDrop(e) {
  e.target.append(taskDragged)
}
