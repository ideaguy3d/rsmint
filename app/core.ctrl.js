(function () {
    angular.module('rsm-app').controller('CoreCtrl', ['$scope', '$location', '$rootScope',
        //'rrShowBusinessIntelligenceView', // not sure why this resolve wasn't getting injected :\
        CoreCtrlClass
    ]);

    function CoreCtrlClass($scope, $location, $rootScope) {
        // get a timestamp for logging while developing:
        let today = getCurrentDate();
        $rootScope.appLocal = true;
        $scope.ccBusinessIntelligence = false;
        //$scope.rUserIsAuthenticated = false;

        $scope.ccToggleBusinessIntelligence = function () {
            $scope.ccBusinessIntelligence = !$scope.ccBusinessIntelligence;
            if ($scope.ccBusinessIntelligence) {
                $location.path('/business-intelligence');
            }
            else {
                $location.path('/');
            }
            console.log("rsm - business intelligence should get toggled...");
        };

        activate();

        function activate() {
            console.log("Core Controller Activated ~ " + today);
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