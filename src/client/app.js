import angular from 'angular'
import uiRouter from 'angular-ui-router'
import config from './config/config'
import TasksController from './controllers/TasksController'
import CreateTaskController from './controllers/CreateTaskController'
import TaskController from './controllers/TaskController'
import TasksService from './services/TasksService'
import Task from './directives/task'
import AddTaskForm from './directives/addTaskForm'

angular.module('Tasks', ['ui.router'])
  .config(config)
  .controller('TasksController', TasksController)
  .controller('TaskController', TaskController)
  .controller('CreateTaskController', CreateTaskController)
  .service('tasksService', TasksService)
  .directive('task', Task.instance)
  .directive('addTaskForm', AddTaskForm.instance)
  
angular.bootstrap(document, ['Tasks'])
