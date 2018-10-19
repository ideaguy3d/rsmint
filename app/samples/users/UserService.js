(function () {
    'use strict';

    angular.module('users')
        .service('userService', ['$q', UserService]);

    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function UserService($q) {
        let company = "Redstone Print and Mail";
        // local users data
        let users = [
            {
                name: 'Venus',
                avatar: 'svg-4',
                content: company + ' Coordinator'
            },
            {
                name: 'Richard',
                avatar: 'svg-2',
                content: company + ' Veteran Data Processor, Excel expert, and AccuZip Power User.'
            },
            {
                name: 'Lindsey',
                avatar: 'svg-6',
                content: company + " Data Processor"
            },
            {
                name: 'Tori',
                avatar: 'svg-4',
                content: company + ' Coordinator'
            },
            {
                name: 'Ray',
                avatar: 'svg-5',
                content: company + ' Veteran Data Processor and JetLetter Power User.'
            },
            {
                name: 'Julius',
                avatar: 'svg-1',
                content: company + " Full Stack Developer."
            },
            {
                name: 'Michael Lewis',
                avatar: 'svg-4',
                content: company + " Super Beast Designer."
            }
        ];

        // Promise-based API
        return {
            loadAllUsers: function () {
                // Simulate async nature of real remote calls
                return $q.when(users);
            }
        };
    }

})();
