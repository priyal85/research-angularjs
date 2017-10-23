var myModule = angular.module("mySayHelloModule", []);
myModule.controller("HelloCtrl",HelloCtrl);
function HelloCtrl(){
  this.message = "Hello, I'm from say hello module!";
}
