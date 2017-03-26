/**
 * Created by ergou on 3/26/2017.
 */
(function () {
    "use strict";

    var module = angular.module("customer.module");

    module.component("customerList", {
        templateUrl: 'app/customer/customer-list.component.html',
        bindings: {
            customerList: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.$onInit = function () {
                console.log('this is costomerList component controller');
                console.log(vm.customerList);
            }
        }
    })
})();