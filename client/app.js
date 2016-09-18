var app = angular.module('mainApp', ['ui.router', 'home', 'gardens', 'search', 'results', 'auth'])

app.config(function($stateProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: '/components/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'home'
  })
  .state('gardens', {
    url: '/gardens',
    templateUrl: '/components/gardens/gardens.html',
    controller: 'GardensCtrl',
    controllerAs: 'gardens'
  })
  .state('search', {
    url: '/search',
    templateUrl: '/components/search/search.html',
    controller: 'SearchCtrl',
    controllerAs: 'search'
  })
  .state('results', {
    url: '/results',
    templateUrl: '/components/results/results.html',
    controller: 'ResultsCtrl',
    controllerAs: 'results'
  })
  .state('auth', {
    url:'/auth',
    templateUrl: '/components/auth/auth.html',
    controller: 'authCtrl',
    controllerAs: 'auth'

  })
})
