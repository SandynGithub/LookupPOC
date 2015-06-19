//var mocks = window.mockData ? window.mockData : 'mocks/partial';

require.config({
    paths: {
        angular: 'lib/angular/angular',
        angularResource : 'lib/angular-resource/angular-resource',
        angularRoute : 'lib/angular-route/angular-route',
        angularMocks : 'lib/angular-mocks/angular-mocks',
        angularCookies: 'vendor/angular-cookie',
        angularTouch: 'lib/angular-touch/angular-touch',
        keypress: 'lib/angular-ui-keypress/keypress',
        mask: 'vendor/angular-ui-mask',
        fastclick:'lib/ftlabs/fastclick-min',
        mockData: 'mocks/partial',
        q: 'lib/q/q',
        underscore : 'lib/underscore/underscore-min',
        i18n: 'lib/i18n/i18n',
        traceKit: 'lib/tracekit/tracekit'
    },
    baseUrl: 'app/js',
    shim: {
        underscore: {
            init: function () {
                'use strict';
                return _.noConflict();
            }
        },
        'angular': {'exports': 'angular'},
        'angularResource': {deps: ['angular']},
        'angularRoute': {deps: ['angular']},
        'angularTouch': {deps: ['angular']},
        'angularMocks': {deps: ['angular'], 'exports': 'angular.mock'},
        'angularCookies': {deps: ['angular'], 'exports': 'angular.cookies'},
        'signaturePad': { deps: ['angular'] },
        'keypress': { deps: [ 'angular' ] },
        'mask': { deps: [ 'angular' ] }
    },
    priority: [
        'angular'
    ]
});

require([
    'angular',
    'app',
    'angularResource',
    'angularRoute',
    'angularCookies',
    'lookupRoutes',
    'keypress',
    'mask',
], function (angular, app) {
    'use strict';
    window.FastClick.attach(document.body);
    angular.bootstrap(document, [app.name]);
});
