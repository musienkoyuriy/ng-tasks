class CreateTaskController {
  constructor(tasksService, $location) {
    this.tasksService = tasksService
    this.$location = $location
  }

  addTask() {
    const _this = this
    const { title, description, done, priority } = _this
    const newTodo = { title, description, done, priority }

    this.tasksService.createTask(newTodo)
      .then(function(res) {
        _this.clearForm()
        _this.$location.path('/tasks')
      }, function(res) {
        console.log('error')
      })
  }

  clearForm() {
    this.title = ''
    this.description = ''
    this.done = false
    this.priority = 'low'
  }
}

CreateTaskController.$inject = ['tasksService', '$location']

export default CreateTaskController
