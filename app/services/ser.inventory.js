(function () {
    "use strict";

    angular.module('rsm-app').factory('rsmInventoryService', [
        '$http', InventoryServiceClass
    ]);

    function InventoryServiceClass($http) {
        let uriStockLocal = '';

        /**
         * 'stockData' is a js object that'll contain
         * all the pertinent input form info
         *
         * @param stockData  object object
         */
        function addInventory(stockData) {
            let stockDescription = encodeURIComponent(stockData.stockDescription);

            return $http.get();
        }

        return {
            addInventory: addInventory
        }
    }
}());