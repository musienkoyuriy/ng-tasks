class Task {
  constructor() {
    this.restrict = 'A';
    this.scope = {
      data: '='
    };
    this.templateUrl = 'task.html';
    this.controller = 'TaskController';
    this.controllerAs = 'taskCtrl';
  }

  link(scope, element, attrs, ctrl) {
    // ctrl.setData(scope.data);
  }
}

Task.instance = () => {
  const instance = new Task();
  return instance;
}

export default Task;
