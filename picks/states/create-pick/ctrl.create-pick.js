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
        // rootScope bindings
        $rootScope.R_appLocal = true;
        // scope bindings
        $scope.pracDialogStatus = "";
        $scope.customFullscreen = false;
        $scope.createPickEnvelopeUrlTidCancelled = '';
        $scope.createPickImageUrlTidCancelled = '';

        vm.imgEnvelopesUrls = [
            {
                tid: 1,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Chevron,%20Fairfax%20VA.%201908.jpg',
                description: ''
            }, {
                tid: 2,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p9%20Single%20Window%20Black%20Eagle%20Standard%201935.jpg',
                description: '#9 Single Window Black Eagle Standard 1935'
            }, {
                tid: 3,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Washington%20DC,%201908.jpg',
                description: '#10 Single Window Washington DC, 1908'
            }, {
                tid: 4,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p9%20White%20Blank.jpg',
                description: '#9 White Blank'
            }, {
                tid: 5,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20double%20window%20black%20bird%201st%20class%201946.jpg',
                description: '#10 double window black bird 1st class 1946'
            }, {
                tid: 6,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Double%20Window%20Blue%20Eagle%20First%20Class%201935.jpg',
                description: '#10 Double Window Blue Eagle First Class 1935'
            }, {
                tid: 7,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Double%20Window%20Blue%20Eagle%20First%20Class%201935.jpg',
                description: '#10 Double Window Blue Eagle First Class 1935'
            }, {
                tid: 8,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Double%20Window%20First%20Class%201946.jpg',
                description: '#10 Double Window First Class 1946'
            }
        ];
        vm.viewTitle = 'Create a Pick ';
        vm.showPickForm = true;
        vm.requestStatus = '';
        vm.showBoxOne = false;
        vm.showBoxTwo = false;
        vm.isOpen = false;

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
        vm.showEnvelopeImages = showEnvelopeImages;
        vm.showPaperImages = showPaperImages;

        function showPaperImages(event) {
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

                $scope.selectedImage = function (image) {

                }
            }
        }

        function showEnvelopeImages(event) {
            $mdDialog.show({
                controller: EnvelopeDialogCtrl,
                templateUrl: 'states/pick-tickets/dialog.envelope.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: vm.customFullscreen
            }).then(function (answer) {
                $scope.createPickEnvelopeUrlTid = 'Envelope tid = "' + answer + '".';

            }, function () {
                $scope.createPickEnvelopeUrlTidCancelled = "You cancelled the dialog.";
            });

            function EnvelopeDialogCtrl($scope, $mdDialog) {
                $scope.createPickEnvelopeImages = vm.imgEnvelopesUrls;

                $scope.cancel = function () {
                    $mdDialog.cancel();
                };

                $scope.createPickImageSelected = function (tid) {
                    $mdDialog.hide(tid);
                    console.log("tid of envelope selected = " + tid);
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