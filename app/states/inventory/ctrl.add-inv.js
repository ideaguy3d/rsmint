(function () {
    "use strict";

    angular.module("rsm-app")
        .controller("AddInvCtrl", [
            "$timeout", "$q", "$log", "rsmInventoryService", "resolvedAddInvAuthCheck",
            AddInventoryCtrlClass
        ]);

    function AddInventoryCtrlClass($timeout, $q, $log, rsmInventoryService, resolvedAddInvAuthCheck) {
        //-- view model:
        const vm = this;

        //-- class fields:
        vm.intro1 = "Type in SKU or Stock Description";
        // view model strings
        vm.selectedItem = '';
        vm.searchText = '';
        vm.noCache = '';
        vm.stockType = '';
        vm.jobType = '';
        vm.paperStock = '';
        vm.warehouseLocation = '';
        vm.stockDescription = '';
        // view model integers
        vm.totalInventoryAdded = 0;

        //-- initializer functions:
        vm.states = loadSkus();

        //-- view model functions:
        vm.searchTextChange = searchTextChange;
        vm.selectedItemChange = selectedItemChange;
        vm.querySearch = querySearch;
        vm.addInventoryToDb = addInventoryToDb;
        vm.$onInit = initCtrl;
        activate();

        //-- function definitions:
        function activate() {
            console.log("ctrl.add-inv.js RSM activate() - resolved auth route check = " + resolvedAddInvAuthCheck);
        }

        function initCtrl() {
            //
            console.log("RSM $onInit - resolved auth route check = " + resolvedAddInvAuthCheck);
        }

        function searchTextChange(searchText) {
            console.log("text changed to: "+searchText);
        }

        function addInventoryToDb() {
            vm.totalInventoryAdded++;
            console.log("Inventory added.");
        }

        function selectedItemChange(item) {
            console.log("Item changed to " + JSON.stringify(item));
        }

        function querySearch(query) {
            let results = query ? vm.states.filter(createFilterFor(query)) : vm.states;
            if (results) {
                console.log("Do additional processing to results");
            }
            return results;
        }

        function loadStates() {
            let allStates = "Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming";

            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        function loadSkus() {
            let testSkus = "xyz-111-100, xyz-111-101, xxx-111-100,\
              yyy-222-111, yyy-222-555, yzz-222-111,\
              zzz-222-111, zxx-222-555, yzz-222-111,\
              bbb-222-111, bbb-222-555, bbb-222-111,\
              aaa-222-111, aaa-222-555, aaa-222-111,\
              ccc-222-111, ccc-222-555, ccc-222-111,\
              xxx-222-111, yyy-111-222, yzz-321-111,";

            return testSkus.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        function createFilterFor(query) {
            let qLower = query.toLowerCase();

            return function filterFn(state) {
                return state.value.indexOf(qLower) === 0;
            }
        }
    }
}());