

var module = angular.module("clockApp",[]);
module.controller("ClockCtrl",ClockCtrl);
function ClockCtrl($scope,$interval){
   $scope.currentTime = new Date();
   $scope.userThought = "";
   $scope.hourOfDay =  $scope.currentTime.getHours();
   $scope.updateTime =  function(){
      $scope.currentTime = new Date();
     console.log("updateTime is called");
   };
   $scope.Timer = $interval($scope.updateTime,1000);
  console.log("Clock function completed");
}

var module1 = angular.module("BindingExApp",[]);
module1.controller("BindingExCtrl",BindingExCtrl);
function BindingExCtrl($scope){
   $scope.textValue = "";
   $scope.checkBoxValue = "";
   $scope.dateVale =  "";
   $scope.radioVale =  "";
   $scope.textBoxChange =  function(){
     console.log("On Chnag called");
   };
  console.log("BindingExCtrl function completed");
}

var module2 = angular.module("NestedCtrlApp",[]);
module2.controller("NestedCtrl1",Ctrl1);
function Ctrl1($scope){
   $scope.testValue = "From Ctrl 1";

  console.log("Ctrl1 function completed");
}
module2.controller("NestedCtrl2",Ctrl2);
function Ctrl2($scope){
   $scope.testValue = "From Ctrl 2";

  console.log("Ctrl2 function completed");
}
module2.controller("NestedCtrl3",Ctrl3);
function Ctrl3(){
 //  var this=$scope
   this.testValue = "From Ctrl 3";

  console.log("Ctrl1 function completed");
}
module2.controller("NestedCtrl4",Ctrl4);
function Ctrl4(){
   this.testValue = "From Ctrl 4";

  console.log("Ctrl2 function completed");
}
