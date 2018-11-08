(function(){
    "use strict";

    angular.module('rsm-pick').controller('HomeCtrl', [
        '$rootScope',
        HomeCtrlClass
    ]);

    function HomeCtrlClass($rootScope) {
        const vm = this;
        vm.info = "HomeCtrl - ctrl.home.js";
    }
}());