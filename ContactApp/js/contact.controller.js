(function () {
    var module = angular.module("ContactApp");
    module.controller("ContactCtrl", ContactCtrl);
    function ContactCtrl(ContactDataService) {
        var self = this;
        self.promiseFromServer = ContactDataService.getContactsPromise();
        self.promiseFromServer.then(function (data) {
            self.contacts = data;
            self.setSelectedContact(0);
        });
        this.setSelectedContact = function name(index) {
            if (!this.editMode) {
            this.selectedContact = this.contacts[index];
            self.successMessage = undefined;
            self.errorMessage = undefined;

            }
        }

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.buttonClickAction = function () {
            if (this.editMode) {
                var savePromise;
                if (self.addMode) {
                    savePromise = ContactDataService.addContact(this.selectedContact);
                    self.addMode = false;
                } else {
                    savePromise = ContactDataService.saveContact(this.selectedContact);
                }
                savePromise.then(function () {
                    self.successMessage = "Data successfully updated";
                }, function () {
                    self.errorMessage = "Error occured while saving. Please try again"
                });
            }
            this.toggleEditMode();
        }

        this.addButtonClicked = function () {
            self.selectedContact = {}
            self.addMode = true;
            self.selectedContact.id = self.contacts.size + 1
            self.toggleEditMode();
        }
    }
})();