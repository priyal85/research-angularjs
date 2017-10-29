(function () {
    var module = angular.module("ContactApp");
    //Following is a contructor function.
// Typical usage is var object = new AppConfig();
function AppConfig(AppNameService) {
    // var this = {};
     this.name = AppNameService;
     this.author="Priyal";
     this.company="home sweet home";
     this.version= 1;
     this.builtDate = new Date().toDateString();
    //return this;
}

module.service("AppConfService",AppConfig); // new AppConfig();
})();