

var module = angular.module("calApp",[]);
module.controller("calCtrl",calCtrl);
function calCtrl($scope){
   $scope.operand1 ;
   $scope.operand2 ;
   $scope.result =  0;

   $scope.add =  function(){
      $scope.result = eval($scope.operand1) +   eval($scope.operand2);
     console.log("Sum is :"+$scope.result);
   };
   $scope.subtract =  function(){
      $scope.result = eval($scope.operand1 -  $scope.operand2);
     console.log("Result is :"+$scope.result);
   };
   $scope.multiply =  function(){
      $scope.result = $scope.operand1 *  $scope.operand2;
     console.log("Multiplicatio is :"+$scope.result);
   };
   $scope.devide =  function(){
      $scope.result = $scope.operand1 /  $scope.operand2;
     console.log("Devision is :"+$scope.result);
   };

  console.log("calApp controller completed");
}


var module2 = angular.module("calApp2",[]);
module2.controller("calCtrl2",calCtrl2);
function calCtrl2(){
   this.operand1 ;
   this.operand2 ;
   this.result ;
   this.operator ;
   this.clear =  function(){
      this.result = "";
     console.log("Result cleared :"+this.operator);
   };
   this.buttonClicked =  function(buttonEvt){
      this.clear();
      this.operator = buttonEvt.currentTarget.value;
     console.log("Operation is set to :"+this.operator);
   };
  /* this.add =  function(){
      this.clear();
      this.operator = "+";
     console.log("Operation is set to :"+this.operator);
   };
   this.subtract =  function(){
        this.clear();
        this.operator = "-";
    console.log("Operation is set to :"+this.operator);
   };
   this.multiply =  function(){
        this.clear();
        this.operator = "*";
     console.log("Operation is set to :"+this.operator);
   };
   this.devide =  function(){
        this.clear();
        this.operator = "/";
    console.log("Operation is set to :"+this.operator);
  };*/
   this.calculate =  function(){

      if(this.operator){
        switch (this.operator) {
          case '+':
              this.result = eval(this.operand1) +   eval(this.operand2);
              console.log("Sum is :"+this.result);
              break;
          case '-':
              this.result = eval(this.operand1 -  this.operand2);
              console.log("Result is :"+this.result);
              break;
          case '*':
              this.result = this.operand1 *  this.operand2;
              console.log("Multiplicatio is :"+this.result);
              break;
          case '/':
              this.result = this.operand1 /  this.operand2;
              console.log("Devision is :"+this.result);
              break;
          }
      }
      else{
          this.result = "Select an operator";
      }
     console.log("Calculated result is :"+this.result);
   };
  console.log("calApp controller completed");
}
