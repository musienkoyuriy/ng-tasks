import angular from 'angular';

class TasksService {
  constructor($http) {
    this.$http = $http;
  }

  getTasks($http) {
    return this.$http({
      method: 'GET',
      url: '/api/tasks'
    });
  }

  createTask(task) {
    if (!angular.isObject(task)) {
      return false;
    }
    return this.$http({
      method: 'POST',
      url: '/api/newtask',
      data: task
    });
  }

  removeTask(id) {
    if (!angular.isString(id)) {
      return false;
    }
    return this.$http({
      method: 'DELETE',
      url: '/api/task/' + id,
      headers: {"Content-Type": "application/json;charset=utf-8"}
    });
  }
}

TasksService.$inject = ['$http'];

export default TasksService;
