define([
    'angular',
    'angularMocks',
    'mockData',
    'traceKit',
    'models/lookupCCModel',
    'services/lookupCCDataService',
    'controllers/lookupCCController',
], function (angular, angularMocks, metadata, mocks, _) {
    'use strict';



    var app = angular.module('lookUp', ['LookupCCControllers','LookupCCDirectives', 'LookupCCServices','ngMockE2E', 'ngRoute']);

    app.config(function ($provide, $httpProvider) {
        $provide.decorator('$exceptionHandler', function ($delegate) {
            return function (exception, cause) {
                if(!(exception instanceof Error)){
                    if (window.isRunningInWebView) {
                        throw new Error(exception);
                    }else {
                        TraceKit.report(new Error(exception));
                    }
                }
                TraceKit.report(exception);
                $delegate(exception, cause);
            };
        });

        $provide.decorator('$log', function ($delegate, PersistentLog) {
            $delegate.error = _.wrap($delegate.error, function (error, message) {
                PersistentLog.log(message);
                return error(message);
            });

            return $delegate;
        });

        $httpProvider.interceptors.push('HttpLogger');
    });

    app.run(['$httpBackend', '$http', '$templateCache', function ($httpBackend, $http, $templateCache) {
        mocks($httpBackend, metadata, cookieStore);
     }]);

    Number.prototype.asPaddedString = String.prototype.asPaddedString = function (length) {
        var strNumber = this + '';
        while (strNumber.length < length) {
            strNumber = '0' + strNumber;
        }
        return strNumber;
    };

    // polyfill CustomEvent constructor
    (function () {
        function CustomEvent(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    })();

    return app;
});
