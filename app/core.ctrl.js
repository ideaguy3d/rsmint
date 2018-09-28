(function () {
    angular.module('rsm-app').controller('CoreCtrl', ['$scope', '$location',
        //'rrShowBusinessIntelligenceView',
        CoreCtrlClass]);

    function CoreCtrlClass($scope, $location) {
        $scope.ccBusinessIntelligence = false;

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
            //console.log("rrShowBusinessIntelligenceView = " + rrShowBusinessIntelligenceView);
            // if (rrShowBusinessIntelligenceView) {
            //     $scope.ccBusinessIntelligence = false;
            // }
        }
    }
}());