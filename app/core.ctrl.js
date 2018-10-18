(function () {
    angular.module('rsm-app').controller('CoreCtrl', ['$scope', '$location',
        //'rrShowBusinessIntelligenceView', // not sure why this resolve wasn't getting injected :\
        CoreCtrlClass
    ]);

    function CoreCtrlClass($scope, $location) {
        $scope.ccBusinessIntelligence = false;
        $scope.ccUserIsAuthenticated = false;

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
            console.log("Core Controller Activated.");
        }
    }
}());