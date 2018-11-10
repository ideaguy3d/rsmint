(function () {
    "use strict";

    angular.module('rsm-pick').factory('rsmPickService', [
        '$http',
        InventoryServiceClass
    ]);

    function InventoryServiceClass($http) {
        let uriStockLocal = '';

        return {

        }
    }
}());