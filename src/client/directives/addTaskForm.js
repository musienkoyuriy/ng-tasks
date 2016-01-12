class AddTaskForm {
  constructor() {
    this.restrict = 'A';
    this.replace = true;
    this.templateUrl = 'add-task-form.html';
    this.controller = 'CreateTaskController';
    this.controllerAs = 'createTaskCtrl';
  }

  link(scope, element, attrs , ctrl) { }
}

AddTaskForm.instance = () => {
  const instance = new AddTaskForm();
  return instance;
}

export default AddTaskForm;
