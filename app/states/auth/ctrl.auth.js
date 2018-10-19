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
                    console.log("------------------------------------------------");
                    console.log(res);
                    let usernameRes = res.data["x-rsm-result-set"][0]['username'];

                    console.log("------------------------------------------------");
                    console.log("usernameRes = " + usernameRes);
                    if (usernameRes === vm.userDataModel.username) {
                        let qqqRes = res.data["x-rsm-result-set"][0]['rsm_access_Q'];
                        if (qqqRes === vm.userDataModel.qqq) {
                            console.log("RSM_SUCCESS - user is good to go :)");
                        }
                    }
                    else {
                        console.log("------------------------------------------------");
                        console.log("RSM_ERROR - user not valid >:(");
                    }
                })
                .catch(function (err) {
                    console.log("__>> RSM_ERROR: ", err);
                });
        };
    }
}());