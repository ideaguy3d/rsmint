(function () {
    angular.module('rsm-pick').controller('CoreCtrl', [
        '$scope', '$location', '$rootScope',
        CoreCtrlClass
    ]);

    function CoreCtrlClass($scope, $location, $rootScope) {
        // get a timestamp for logging while developing:
        let today = getCurrentDate();

        $scope.ccMockData = [
            {
                id: 601,
                coordinator_name: "Tori",
                due_date: '2018-11-09 12:17:16.977',
                quantity: 5144,
                paper_description: '',
                envelope_description: '',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg'
            }
            ,{
                id: 601,
                coordinator_name: "Tori",
                due_date: '2018-11-09 12:17:16.977',
                quantity: 5144,
                paper_description: '',
                envelope_description: '',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg'
            }
        ];

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