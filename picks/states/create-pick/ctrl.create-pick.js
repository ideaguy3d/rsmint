(function () {
    "use strict";

    angular.module('rsm-pick').controller('CreatePickCtrl', [
        '$rootScope', '$scope', '$mdToast', 'rsmPickService', '$mdDialog',
        CreatePickCtrlClass
    ]);

    function CreatePickCtrlClass(
        $rootScope, $scope, $mdToast, rsmPickService, $mdDialog
    ) {
        const vm = this;
        let pickTicketModel = {};
        $rootScope.R_appLocal = true;

        vm.viewTitle = 'Create a Pick ';
        vm.showPickForm = true;
        vm.requestStatus = '';
        vm.showBoxOne = false;
        vm.showBoxTwo = false;
        vm.isOpen = false;
        $scope.pracDialogStatus = "";
        $scope.customFullscreen = false;

        //-- View model data bindings:
        vm.coordinatorName = '';        // 1
        vm.dueDate = new Date();        // 2
        vm.quantity = '';               // 3
        vm.paperDescription = '';       // 4
        vm.envelopeDescription = '';    // 5
        vm.paperImgUrl = '';            // 6
        vm.envelopeImgUrl = '';         // 7
        vm.jobNumber = '';              // 8

        vm.sendPickTicket = sendPickTicket;
        vm.showAdvanced = showAdvanced;

        function showAdvanced(event) {
            $mdDialog.show({
                controller: DialogCtrl,
                templateUrl: 'states/pick-tickets/dialog.prac.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: vm.customFullscreen
            }).then(function (answer) {
                $scope.pracDialogStatus = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.pracDialogStatus = "You cancelled the dialog.";
            });

            function DialogCtrl($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };

                $scope.cancel = function () {
                    $mdDialog.cancel();
                };

                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
            }
        }

        function sendPickTicket() {
            let isoDate = vm.dueDate;
            isoDate = isoDate.toISOString();

            pickTicketModel = {
                jobNumber: vm.jobNumber,
                coordinatorName: vm.coordinatorName,
                dueDate: isoDate,
                quantity: vm.quantity,
                paperDescription: vm.paperDescription,
                envelopeDescription: vm.envelopeDescription,
                paperImgUrl: vm.paperImgUrl,
                envelopeImgUrl: vm.envelopeImgUrl
            };

            if ($rootScope.R_appLocal) {
                console.log("going to send this request:");
                console.log(pickTicketModel);
                console.log("coordinator name = " + vm.coordinatorName);
            }

            if (pickTicketModel.jobNumber) {
                rsmPickService.createPickTicket(pickTicketModel).then(function (res) {
                    console.log("response from createPickTicket app:");
                    console.log(res);
                    vm.requestStatus = "Your Pick ticket was sent ^_^";
                    vm.showPickForm = false;
                }).catch(function (err) {
                    console.log('__>> RSM_ERROR: ');
                    console.log(err);
                    vm.requestStatus = "Uh oh, there was an error. Refresh page & Try again";
                    vm.showPickForm = false;
                });
            }
            else {
                vm.requestStatus = "Please add a job number."
            }
        }

    } // END OF: CreatePickTicketClass

}());