(function () {
    var module = angular.module("ContactApp");
    module.value("LoggingSvc",function () {
        console.log("Hello");
    });
})();