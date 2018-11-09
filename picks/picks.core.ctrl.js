(function () {
    angular.module('rsm-pick').controller('CoreCtrl', [
        '$scope', '$location', '$rootScope',
        CoreCtrlClass
    ]);

    function CoreCtrlClass($scope, $location, $rootScope) {
        // get a timestamp for logging while developing:
        let today = getCurrentDate();

        $scope.ccMockData = [
            {
                id: 601,
                coordinator_name: "Tori",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }
            , {
                id: 601,
                coordinator_name: "Leslie",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }, {
                id: 601,
                coordinator_name: "Rosaline",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }
            , {
                id: 601,
                coordinator_name: "Venus",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }, {
                id: 601,
                coordinator_name: "Venus",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: '',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }
            , {
                id: 601,
                coordinator_name: "Dorothy",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }, {
                id: 601,
                coordinator_name: "Tori",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }
            , {
                id: 601,
                coordinator_name: "Lindsey",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }, {
                id: 601,
                coordinator_name: "Rosaline",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }
            , {
                id: 601,
                coordinator_name: "Des",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: '',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }, {
                id: 601,
                coordinator_name: "Venus",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: '',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }
            , {
                id: 601,
                coordinator_name: "Dorothy",
                due_date: '2018-11-09 12:17:16.977',
                rquantity: 5144,
                paper_description: 'Paper: Post Card 100# gloss cover/  13x18/ first class pre-sort /box permit imprint 1935 / 2221 sheets',
                envelope_description: 'Envelope: insert #9 custom BRE  into white  #10 / first class pre-sort / circle permit imprint 1935 with',
                paper_image_url: 'http://localhost/rsmint/images/paper.jpg',
                envelope_image_url: 'http://localhost/rsmint/images/envelope.jpg', mark_complete: ''
            }
        ];

        $scope.ccMarkComplete = function (node) {
            console.log("hide element, then make request to db, element = ");
            console.log(node);
        };

        activate();

        function activate() {
            console.log("Core Controller Activated ~ " + today);
        }

        function getCurrentDate() {
            let currentdate = new Date();
            return (currentdate.getMonth() + 1) + "/"
                + currentdate.getDate() + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
        }
    }
}());