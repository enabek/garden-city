var app = angular.module('mainApp', ['ui.router'])

app.config(function($stateProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: '/components/home/home.html'
  })
})
