angular.module('test', [])
.service('testService', function() {

  this.msg = "I'm a value in the testService";

  this.testFunction = function() {
    console.log("Hiya from inside the test service");
    console.log("the secrest msg is: ", this.msg);
  };

})

.service('secondTestService', function () {
  this.msg = 1;

  this.testFunction = function() {
    this.msg++;
    console.log("the counter is:", this.msg);
  };

})
