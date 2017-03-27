/**
 * Created by ergou on 3/26/2017.
 */
(function () {
    "use strict";

    var module = angular.module('customer.module');

    module.component('customerEdit', {
        //templateUrl is relative to index.html
        templateUrl: 'app/customer/customer-edit.component.html',
        bindings: {
            customer: '<'
        },
        controllerAs: 'vm',
        controller: controller
    });

    function controller () {
        var vm = this;
    }
})();