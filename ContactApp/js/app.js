var module = angular.module("ContactApp", []);

module.controller("HeaderCtrl", HeaderCtrl);
module.controller("FooterCtrl", FooterCtrl);


function HeaderCtrl(AppConfService,LoggingSvc) {
    this.appTitle = AppConfService.name;
    this.author=AppConfService.author;
    AppConfService.version = AppConfService.version+1;
    this.version = AppConfService.version;
    LoggingSvc();
}

function FooterCtrl(AppConfService,LoggingSvc) {
    this.appTitle = AppConfService.name;
    this.author=AppConfService.author;
    console.log(AppConfService.version);
    this.version = AppConfService.version;
    this.buildDate = AppConfService.builtDate;
    LoggingSvc();
}

