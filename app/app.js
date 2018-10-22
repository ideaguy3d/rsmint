angular.module('rsm-app',
    ['ngMaterial', 'ngRoute', 'ngMessages', 'ngMdIcons',
        'ngAnimate', 'users']) // , "material.svgAssetsCache"
    .config(function ($mdThemingProvider, $mdIconProvider) {
        let redstoneRedMap = $mdThemingProvider.extendPalette('red', {
            '500': '#434343',
            'contrastDefaultColor': 'dark'
        });

        $mdThemingProvider.definePalette('redstoneRed', redstoneRedMap);
        $mdThemingProvider.theme('default').primaryPalette('redstoneRed');

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
                    templateUrl: 'states/inventory/view.inventory.html',
                    controller: 'InventoryCtrl',
                    controllerAs: 'ctrl',
                    resolve: {
                        resolvedAuthCheck: function () {
                            let test = "hi ^_^/";
                            return "route resolved value = " + test;
                        }
                    }
                })
                .when('/inventory/add-inventory', {
                    templateUrl: 'states/inventory/view.add-inventory.html'
                })
                .when('/coordinator-tools', {
                    templateUrl: 'states/home/view.home.html'
                })
                .when('/home', {
                    templateUrl: 'states/home/view.home.html'
                })
                .when('/', {
                    templateUrl: 'states/auth/view.auth.html'
                });

            // $locationProvider.otherwise('/');
        }]
    );
