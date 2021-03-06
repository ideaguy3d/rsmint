(function () {
    angular.module('users')
        .controller('UserController', [
            'userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
            UserControllerClass
        ]);

    /**
     * - Main Controller for the Angular Material Starter App
     *
     * @param userService
     * @param $mdSidenav
     * @param $mdBottomSheet
     * @param $timeout
     * @param $log
     *
     * @constructor
     */
    function UserControllerClass(userService, $mdSidenav, $mdBottomSheet, $timeout, $log) {
        const self = this;

        self.selected = null;
        self.users = [];
        self.selectUser = selectUser;
        self.toggleList = toggleUsersList;
        self.makeContact = makeContact;

        // Load all registered users
        userService
            .loadAllUsers()
            .then(function (users) {
                self.users = [].concat(users);
                self.selected = users[0];
            });

        // *********************************
        //  ****** Internal methods *******
        // *********************************

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        /**
         * Select the current avatars
         * @param user
         */
        function selectUser(user) {
            self.selected = angular.isNumber(user) ? self.users[user] : user;
        }

        /**
         * Show the Contact view in the bottom sheet
         */
        function makeContact(selectedUser) {
            $mdBottomSheet.show({
                controllerAs: "vm",
                templateUrl: './modules/users/view/contactSheet.html',
                controller: ['$mdBottomSheet', ContactSheetController],
                parent: angular.element(document.getElementById('content'))
            }).then(function (clickedItem) {
                $log.debug(clickedItem.name + ' clicked!');
            });

            /**
             * User ContactSheet controller
             */
            function ContactSheetController($mdBottomSheet) {
                this.user = selectedUser;

                this.items = [
                    {name: 'Special Algorithm', icon: 'phone', icon_url: 'assets/svg/phone.svg'},
                    {name: 'Sub Application', icon: 'twitter', icon_url: 'assets/svg/twitter.svg'},
                    {name: 'Other tool', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg'},
                    {name: 'Custom Data Report', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg'}
                ];

                this.contactUser = function (action) {
                    // The actually contact process has not been implemented...
                    // so just hide the bottomSheet

                    $mdBottomSheet.hide(action);
                };
            }
        }

    } // END OF: UserControllerClass

})();
