define([
    'app'
], function () {
    'use strict';
    angular.module('LookupCCServices', []).service('LookupCCDataService',function () {
        var lookupModel ={};

        var test  = null;
        return {
            setCancelPath: function (path) {
                lookupModel.cancelPath = path;
            },
            getCancelPath: function () {
                return lookupModel.cancelPath;
            },
            setCreditCards: function(creditCards){
                lookupModel.creditCards =  creditCards;
            },
            getCreditCards: function(){
                return lookupModel.creditCards;
            }
        };
    });
});
