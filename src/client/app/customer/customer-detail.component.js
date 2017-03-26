/**
 * Created by ergou on 3/26/2017.
 */
(function () {
    "use strict";

    var module = angular.module('customer.module');

    module.component('customerDetail', {
        templateUrl: 'app/customer/customer-detail.component.html',
        bindings: {
            customer: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.$onInit = function () {
                console.log(vm.customer.customerId);
            }
        }
    })
})();