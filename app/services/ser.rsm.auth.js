(function(){
    "use strict";

    angular.module('rsm-app')
        .factory('RsmAuthSer', ['$http', '$scope', RsmAuthSerClass]);

    function RsmAuthSerClass($http, $scope) {
        let production = '192.138.7.17/q/inventory/login';
        let localhost = 'http://localhost/q/inventory/login';
        let uriRsmAuth = $scope.appLocal ? localhost : production;

        function rsmLogin(loginAuthObj) {
            // encode GET params
            let username = encodeURIComponent(loginAuthObj.username);
            let qqq = encodeURIComponent(loginAuthObj.qqq);

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