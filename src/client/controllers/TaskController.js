import angular from 'angular'

class TaskController {
  constructor($scope, tasksService, $window) {
    const {title, description, done, priority} = $scope.data
    angular.extend(this, { title, description, done, priority })
    this.tasksService = tasksService
    this.$window = $window
    this.isDescriptionBlockActive = false
  }

  toggleDescriptionVisibility() {
    this.isDescriptionBlockActive = !this.isDescriptionBlockActive
  }

  removeTask() {
    const _this = this
    const { _id } = _this
    if (!_id) {
      return
    }
    _this.tasksService.removeTask(_id)
      .then(function(res) {
        _this.$window.location.reload()
      }, function() {
        console.log('error')
      });
  }
}

TaskController.$inject = ['$scope', 'tasksService', '$window']

export default TaskController
