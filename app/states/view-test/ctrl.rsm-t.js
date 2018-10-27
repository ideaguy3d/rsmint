(function () {
    "use strict";

    angular.module('rsm-app')
        .controller('RsmViewTestCtrl', [
            RsmViewTestCtrlClass
        ]);

    function RsmViewTestCtrlClass() {
        const vm = this;
        vm.routeVal_1 = 'world';
        vm.hasActivated = false;

        activate();
        function activate() {
            console.log("RsmViewTestCtrlClass has been activated");
            vm.hasActivated = true;
        }
    }
}());