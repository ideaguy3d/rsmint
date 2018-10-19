(function () {
    angular.module('rsm-app')
        .controller('RsmAuthCtrl', [
            'rsmAuthSer',
            RsmAuthCtrlClass
        ]);

    function RsmAuthCtrlClass(rsmAuthSer) {
        const vm = this;
        vm.userDataModel = {
            username: '',   // string
            qqq: ''         // string
        };

        vm.rsmLogin = function () {
            console.log("should make request to Ninja API");
            rsmAuthSer.rsmLogin(vm.userDataModel)
                .then(function (res) {
                    console.log("Server Response:");
                    console.log(res);
                })
                .catch(function (err) {
                    console.error("RSM_ERROR: ", err);
                });
        };
    }
}());