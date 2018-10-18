(function(){
    "use strict";

    angular.module('rsm-app')
        .factory('rsmAuthSer', ['$http', '$rootScope', RsmAuthSerClass]);

    function RsmAuthSerClass($http, $rootScope) {
        let production = 'http://192.168.7.17/q/inventory/login';
        let localhost = 'http://localhost/q/inventory/login';
        let uriRsmAuth = $rootScope.appLocal ? localhost : production;

        function rsmLogin(loginAuthObj) {
            // encode GET params
            let username = encodeURIComponent(loginAuthObj.username);
            let qqq = encodeURIComponent(loginAuthObj.qqq);
            console.log("will make HTTP GET request in rsmLogin()");
            console.log(loginAuthObj);
            return $http.get(uriRsmAuth +
                // ALWAYS '?' for 1st query string param
                '?username=' + username +
                '&qqq=' + qqq
            );
        }

        return {
            rsmLogin: rsmLogin
        }
    }
}());