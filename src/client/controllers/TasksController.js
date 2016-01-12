class TasksController {
  constructor(tasksService) {
    const _this = this;

    tasksService.getTasks().then(function(res) {
      _this.tasks = res.data;
    }, function() {
      console.log('error');
    });
  }
}

export default TasksController;
