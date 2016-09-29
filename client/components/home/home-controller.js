angular.module('home', [])
  .controller('HomeCtrl', function(secondTestService) {
    var home = this;

    home.title = 'HOME';

    // learning services
    
    secondTestService.testFunction();
    
  })
