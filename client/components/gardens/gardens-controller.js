angular.module('gardens', [])
  .controller('GardensCtrl', function(testService, secondTestService) {
    var gardens = this;

    gardens.title = 'GARDENS';


    // stuff for learning services
    gardens.testFunction = testService.testFunction;

    gardens.testFunction();

    secondTestService.testFunction();

  });
