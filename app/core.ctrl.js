(function(){
   angular.module('rsm-app').controller('CoreCtrl', ['$scope', CoreCtrlClass]);

   function CoreCtrlClass($scope){
        $scope.ccBusinessIntelligence = true;

        $scope.ccToggleBusinessIntelligence = function () {
            $scope.ccBusinessIntelligence = !$scope.ccBusinessIntelligence;

            console.log("rsm - business intelligence should get toggled...");
        }
    }
}());