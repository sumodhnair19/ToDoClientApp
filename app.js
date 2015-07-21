'use strict';


var clientApp = angular.module('clientApp', ['ui.router',  'LocalStorageModule']);
  
  
clientApp.config(['$stateProvider','$urlRouterProvider','localStorageServiceProvider', function($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
    //$locationProvider.html5Mode(true);

 localStorageServiceProvider.setPrefix('clientLS');
    $urlRouterProvider.otherwise('/todo');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
         .state('finder', {
            url: '/finder',
            templateUrl: 'views/finder-partial.tpl.html',
            controller: 'finderCtrl'
        })
        .state('todo', {
            url: '/todo',
            templateUrl: 'views/todo-partial.tpl.html',
            controller: 'todoCtrl'
        });
        
}]);
