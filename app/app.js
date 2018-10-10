angular.module('rsm-app',
    ['ngMaterial', 'users', 'ngRoute'])
    .config(function ($mdThemingProvider, $mdIconProvider) {
        let redstoneRedMap = $mdThemingProvider.extendPalette('red', {
            '500': '#f5f5f5',
            'contrastDefaultColor': 'dark'
        });

        $mdThemingProvider.definePalette('redstoneRed', redstoneRedMap);

        $mdThemingProvider.theme('default')
            .primaryPalette('redstoneRed');

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);

        $mdThemingProvider.theme('default')
        //.primaryPalette('grey')
        //.accentPalette('red')
        //.backgroundPalette('red')
        //.dark()
        ;

    })
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/business-intelligence', {
                    templateUrl: 'states/bi/view.bi.html',
                    // controller: 'CoreCtrl',
                    // resolve: {
                    //     // rr == route resolve
                    //     rrShowBusinessIntelligenceView: function () {
                    //         return true;
                    //     }
                    // }
                })
                .when('/inventory', {
                    templateUrl: 'states/inventory/view.inventory.html'
                })
                .when('/', {
                    templateUrl: 'states/home/view.home.html'
                });

            console.log("$routeProvider should be configured");
            //$locationProvider.otherwise('/');
        }]
    );
