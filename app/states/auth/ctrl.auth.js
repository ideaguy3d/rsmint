(function () {
    angular.module('rsm-app')
        .controller('RsmAuthCtrl', [
            '$rootScope', '$scope', '$location', '$timeout', 'rsmAuthSer',
            RsmAuthCtrlClass
        ]);

    function RsmAuthCtrlClass($rootScope, $scope, $location, $timeout, rsmAuthSer) {
        //-- The View Model:
        const vm = this;
        // View Model Class Fields
        vm.loginError = false;
        vm.loginAttempts = 0;
        vm.userDataModel = {
            username: '',   // string
            qqq: ''         // string
        };

        vm.rsmLogin = function () {
            if ($rootScope.R_appLocal) {
                console.log("should make request to Ninja API");
            }

            rsmAuthSer.rsmLogin(vm.userDataModel)
                .then(function (res) {
                    if ($rootScope.R_appLocal) {
                        console.log("------------------------------------------------");
                        console.log(res);
                    }

                    let usernameRes = res.data["x-rsm-result-set"][0]['username'];

                    if ($rootScope.R_appLocal) {
                        console.log("------------------------------------------------");
                        console.log("usernameRes = " + usernameRes);
                    }

                    if (usernameRes === vm.userDataModel.username) {
                        let qqqRes = res.data["x-rsm-result-set"][0]['rsm_access_Q'];
                        if (qqqRes === vm.userDataModel.qqq) {
                            vm.loginError = false;
                            $rootScope.rUserIsAuthenticated = true;
                            //console.log("RSM_SUCCESS - user is good to go :)");
                            $location.path("/");
                        }
                    }
                    else {
                        // cause a flicker so it looks like it reacted to user input
                        vm.loginError = true;
                        vm.loginAttempts++;
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