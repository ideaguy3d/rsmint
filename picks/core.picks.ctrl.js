(function () {
    angular.module('rsm-pick').controller('CoreCtrl', [
        '$scope', '$location', '$rootScope', 'rsmPickService',
        CoreCtrlClass
    ]);

    function CoreCtrlClass($scope, $location, $rootScope, rsmPickService) {
        // get a timestamp for logging while developing:
        let today = getCurrentDate();
        $rootScope.R_appLocal = true;
        $scope.ccPrintTickets = [];

        rsmPickService.readPickTickets()
            .then(function (res) {
                console.log("rsm - the data looks like: ");
                console.log(res.data);
                $scope.ccPrintTickets = res.data;
            })
            .catch(function (err) {
                console.log("__>> RSM_ERROR: ", err);
            });

        $scope.ccMarkComplete = function (node) {
            console.log("hide element, then make request to db, element = ");
            console.log(node);
        };

        activate();

        function activate() {
            console.log("Pick Ticket App Core Controller Activated ~ " + today);
        }

        function getCurrentDate() {
            let currentdate = new Date();
            return (currentdate.getMonth() + 1) + "/"
                + currentdate.getDate() + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
        }
    }
}());