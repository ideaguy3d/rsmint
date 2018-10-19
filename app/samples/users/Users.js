(function () {
    'use strict';

    // Prepare the 'users' module for subsequent registration of controllers and delegates
    angular.module('users', ['ngMaterial'])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('red').dark();

            var redstoneRedMap = $mdThemingProvider.extendPalette('red', {
                '500': '#ff0000',
                'contrastDefaultColor': 'dark'
            });

            $mdThemingProvider.definePalette('redstoneRed', redstoneRedMap);

            $mdThemingProvider.theme('red')
                .primaryPalette('redstoneRed');
        });
})();
