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
        controller: customerEditCtrl
    });

    customerEditCtrl.$inject = ['customerService', '$state', 'toastr'];
    ///////////////////////////////////////////////////////

    function customerEditCtrl (customerService, $state, toastr) {
        var vm = this;
        vm.submit = submit;
        vm.cancel = cancel;

        function submit() {
            vm.customer.$save(function (response) {
                toastr.success('Save Success')
            });
        }

        function cancel() {
            $state.go('customerList');
        }
    }
})();