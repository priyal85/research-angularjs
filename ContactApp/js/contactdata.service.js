(function () {
    var module = angular.module("ContactApp");
    module.service("ContactDataService",function ($http) {
        var self = this;
        this.getContactsPromise = function () {
           var promise1 = $http.get('http://localhost:3000/contacts');
          //var promise1 = $http.get('https://randomuser.me/api/?results=10');
           var promise2 =  promise1.then(function name(response) {
               return response.data; //for local server
              // return response.data.results; //for randomuser remote server
            });
            return promise2;
        }

        this.saveContact = function (editedContact) {
            var promise1 = $http.put('http://localhost:3000/contacts/'+editedContact.id,editedContact);
           // var promise1 = $http.get('https://randomuser.me/api/?results=10');
             return promise1.then(function name(response) {
                 console.log(response);
              });
             
          }

          this.addContact = function (addingContact) {
            var promise1 = $http.post('http://localhost:3000/contacts/',addingContact);
           // var promise1 = $http.get('https://randomuser.me/api/?results=10');
             return promise1.then(function name(response) {
                 console.log(response);
              });
             
          }
        
    });
})();