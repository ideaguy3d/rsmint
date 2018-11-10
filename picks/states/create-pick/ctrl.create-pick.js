(function () {
    "use strict";

    angular.module('rsm-pick').controller('CreatePickCtrl', [
        '$rootScope', '$scope', '$mdToast', 'rsmPickService',
        CreatePickCtrlClass
    ]);

    function CreatePickCtrlClass($rootScope, $scope, $mdToast, rsmPickService) {
        const vm = this;
        vm.viewTitle = "Create a Pick Ticket";
    }

}());