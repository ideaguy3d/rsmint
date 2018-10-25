(function(){
    "use strict";

    angular.module('rsm-app').controller('HomeCtrl', [
        '$rootScope',
        HomeCtrlClass
    ]);

    function HomeCtrlClass($rootScope) {
        const vm = this;
        vm.info = "HomeCtrl - ctrl.home.js";
    }
}());