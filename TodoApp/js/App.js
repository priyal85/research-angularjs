

var module = angular.module("modulesApp",["mySayHelloModule"]);
module.factory("propertyService",function($rootScope){
  $rootScope.useStype1=false;
  $rootScope.useStype2=false;
  $rootScope.useStype3=true;
  $rootScope.useStype4=false;
  var propertyService = {};
  propertyService.clear = function(){
    $rootScope.useStype1=false;
    $rootScope.useStype2=false;
    $rootScope.useStype3=false;
    $rootScope.useStype4=false;
  }

    propertyService.styleSelected = function(selectedValue){
      propertyService.clear();
      switch (selectedValue) {
        case "st1":
          $rootScope.useStype1=true;
          break;
        case "st2":
          $rootScope.useStype2=true;
          break;
        case "st3":
          $rootScope.useStype3=true;
          break;
        case "st4":
          $rootScope.useStype4=true;
          break;
        default:
 }
};
return propertyService;
});
module.controller("TodoCtrl",TodoCtrl);
function TodoCtrl(){

  this.todoList=[];
  this.addTodo = function(){
    this.todoList.push(this.newTodo);
     this.newTodo="";
  }
  this.deleteTodo = function(index){
   this.todoList.splice(index,1);
  }
  this.keyPressed = function(keyEvent) {
  if (keyEvent.which === 13)
  this.addTodo();
}
this.toggleEditMode = function(){
   this.editMode=!this.editMode;
}

}

module.controller("MenuCtrl",MenuCtrl);
function MenuCtrl(propertyService){

  this.styleSelected =  function(buttonEvt){
  propertyService.styleSelected( buttonEvt.currentTarget.attributes[2].value);
    console.log("Stlye is set to :"+buttonEvt.currentTarget.value);
  }
}
