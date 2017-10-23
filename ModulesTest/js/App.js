

var module = angular.module("modulesApp",["mySayHelloModule","ngTagsInput"]);
module.controller("TagCtrl",tagsCtrl);
function tagsCtrl(){
  this.tagList=[];
}
