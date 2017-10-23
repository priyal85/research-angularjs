var module = angular.module("MoreDirectivesApp",[]);
module.controller("MoreDirectivesCtrl",MoreDirectivesCtrl);
function MoreDirectivesCtrl(){
  this.list=[1,5,8,9,10,3,2];
    this.stdList=[
    { 'name':"Joe",'age':10},
    { 'name':"Jame",'age':12},
    { 'name':"Rogger",'age':11},
    { 'name':"Ben",'age':13}];
}
