(function () {
    "use strict";

    angular.module('rsm-pick').factory('rsmPickService', [
        '$http', '$rootScope',
        InventoryServiceClass
    ]);

    function InventoryServiceClass($http, $rootScope) {
        let localUri = 'http://localhost/ninja/app/pick/tickets';
        let productionUri = '';
        let uri = localUri;

        function readPickTickets() {
            return $http.get(uri + '/read/v1');
        }

        function createPickTicket(pickTicket) {
            let coordinatorName = encodeURIComponent(pickTicket['coordinatorName']);
            let dueDate = encodeURIComponent(pickTicket['dueDate']);
            let quantity = encodeURIComponent(pickTicket['quantity']);
            let paperDescription = encodeURIComponent(pickTicket['paperDescription']);
            let envelopeDescription = encodeURIComponent(pickTicket['envelopeDescription']);
            let paperImgUrl = encodeURIComponent(pickTicket['paperImgUrl']);
            let envelopeImgUrl = encodeURIComponent(pickTicket['envelopeImgUrl']);

            let request = uri + '/create/v1?' +
                'coordinatorName=' + coordinatorName +
                '&dueDate=' + dueDate +
                '&quantity' + quantity +
                '&paperDescription' + paperDescription +
                '&envelopeDescription' + envelopeDescription +
                '&paperImgUrl' + paperImgUrl +
                '&envelopeImgUrl' + envelopeImgUrl
            ;

            if ($rootScope.R_appLocal) {
                console.log("will make HTTP GET request to:");
                console.log(request);
            }

            return $http.get(request);
        }

        return {
            readPickTickets: readPickTickets,
            createPickTicket: createPickTicket
        }
    }
}());