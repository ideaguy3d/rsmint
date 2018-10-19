(function () {
    "use strict";

    angular.module('rsm-app')
        .factory('rsmAuthSer', ['$http', '$rootScope', RsmAuthSerClass]);

    function RsmAuthSerClass($http, $rootScope) {
        let production = 'http://192.168.7.17/ninja/app/q/inventory/login';
        let localhost = 'http://localhost/ninja/app/q/inventory/login';
        let uriRsmAuth = $rootScope.appLocal ? localhost : production;

        function rsmLogin(loginAuthObj) {
            // encode GET params
            let username = encodeURIComponent(loginAuthObj.username);
            let qqq = encodeURIComponent(loginAuthObj.qqq);
            let getRequestUri = uriRsmAuth +
                // ALWAYS '?' for 1st query string param
                '?username=' + username +
                '&qqq=' + qqq;

            console.log("In rsmLogin()");
            console.log(loginAuthObj);
            console.log("will make HTTP GET request to:");
            console.log(getRequestUri);

            return $http.get(getRequestUri);
        }

        return {
            rsmLogin: rsmLogin
        }
    }
}());