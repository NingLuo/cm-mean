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
        controller: customerListCtrl
    });

    customerListCtrl.$inject = ['customerService', 'toastr'];
    /////////////////////////////////////////////////

    function customerListCtrl(customerService, toastr) {
        var vm = this;
        vm.deleteCustomer = deleteCustomer;

        function deleteCustomer(customerId) {
            customerService.remove({customerId: customerId}, function (response) {

                toastr.success('Delete Success');

                //Retrieve updated customer list
                customerService.query(function (response) {
                    vm.customerList = response;
                });
            });
        }
    }
})();
