define([
    'app'
], function () {
    'use strict';
    angular.module('LookupCCControllers', []).controller('LookupCCController', [
        '$scope',
        '$location',
        'LookupCCDataService',
        function ($scope,$location,lookupCCDataService) {
           $scope.getCreditCards =  function(){
                console.log('getting credit cards');
           };

           $scope.navigate = function (path) {
                $location.path(path);
           };

            $scope.exitApp = function(){
                lookupCCDataService.setCreditCards('CC1 GAP visa card . CC2 BR Visa card');
                $location.path(lookupCCDataService.getCancelPath());
            }

            $scope.cancel = function(){
                $location.path(lookupCCDataService.getCancelPath());
            }

        }
    ]);
});
