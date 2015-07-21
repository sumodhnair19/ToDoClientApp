'use strict';

clientApp.controller('todoCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];
    $scope.completedTodos = localStorageService.get('completedTodos') || [];
  
    $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push({text : $scope.todo,status : false});
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
    
    $scope.completeTodo = function($index){
    	if($scope.completedTodos) {
    	  $scope.completedTodos.push($scope.todos[$index]);	
    	  localStorageService.add('completedTodos', $scope.completedTodos);
    	  
    	  $scope.removeTodo($index);
    	}
    }

  });