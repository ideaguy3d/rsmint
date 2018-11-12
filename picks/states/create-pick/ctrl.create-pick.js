(function () {
    "use strict";

    angular.module('rsm-pick').controller('CreatePickCtrl', [
        '$rootScope', '$scope', '$mdToast', 'rsmPickService',
        CreatePickCtrlClass
    ]);

    function CreatePickCtrlClass($rootScope, $scope, $mdToast, rsmPickService) {
        const vm = this;
        vm.viewTitle = "Create a Pick ";

        //-- View model data bindings:
        vm.coordinatorName = '';        // 1
        vm.dueDate = '';                // 2
        vm.quantity = '';
        vm.paperDescription = '';
        vm.envelopeDescription = '';
        vm.paperImgUrl = '';
        vm.envelopeImgUrl = '';
        vm.jobNumber = '';

        let pickTicketModel = {
            coordinatorName: vm.coordinatorName,
            dueDate: vm.dueDate,
            quantity: vm.quantity,
            paperDescription: vm.paperDescription,
            envelopeDescription: vm.envelopeDescription,
            paperImgUrl: vm.paperImgUrl,
            envelopeImgUrl: vm.envelopeImgUrl
        };

        vm.sendPickTicket = sendPickTicket;

        function sendPickTicket() {
            console.log("going to send this request:");
            console.log(pickTicketModel);
        }

    }

}());