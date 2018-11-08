(function () {
    "use strict";

    angular.module('rsm-pick').factory('rsmInventoryService', [
        '$http',
        InventoryServiceClass
    ]);

    function InventoryServiceClass($http) {
        let uriStockLocal = '';

        return {

        }
    }
}());