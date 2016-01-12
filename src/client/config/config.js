import TasksController from '../controllers/TasksController';
import CreateTaskController from '../controllers/CreateTaskController';

const config = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('tasks');
  $stateProvider
    .state('tasks', {
      url: '/tasks',
      controller: TasksController,
      controllerAs: 'tasksCtrl',
      templateUrl: 'tasks.html'
    })
    .state('newtask', {
      url: '/newtask',
      controller: CreateTaskController,
      templateUrl: 'newtask.html'
    });
}
export default config;
