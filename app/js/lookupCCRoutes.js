define(['angular', 'app'], function(angular, app) {
    'use strict';

    app.config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/enterSSN', {
            templateUrl: 'app/js/lib/lookup/app/partials/enterSSN.html',
            controller: 'LookupCCController',
            titleKey: 'Enter SSN'
        });

        $routeProvider.when('/displayCC', {
            templateUrl: 'app/js/lib/lookup/app/partials/displayCC.html',
            controller: 'LookupCCController',
            titleKey: 'Credit Cards'
        });

        $routeProvider.when('/validateUser', {
            templateUrl: 'app/js/lib/lookup/app/partials/validateUser.html',
            controller: 'LookupCCController',
            titleKey: 'Validating User'
        });

        return app.run(['$location', '$rootScope', function ($location, $rootScope) {
            $rootScope.$on('$routeChangeSuccess', function (event, current) {
                if (current.$$route) {
                    $rootScope.titleKey = current.$$route.titleKey;
                }
            });

        }]);
    }]);
});
