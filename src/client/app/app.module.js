/**
 * Created by ergou on 3/26/2017.
 */
(function () {
    "use strict";

    var module = angular.module("customerManagement", ["ui.router", "ngResource", "customer.module", "service.module"]);

    module.config(function ($stateProvider) {
        var customerListState = {
            name: 'customerList',
            url: '/customerList',
            component: 'customerList',
            resolve: {
                // customerService: 'customerService',
                customerList: function (customerService) {
                    // return customerService.getCustomers().then(function (response) {
                    //     return response.data;
                    // });
                    return customerService.query().$promise;
                }
            }
        };

        var customerDetailState = {
            name: 'customerDetail',
            url: 'customer/{customerId}',
            component: 'customerDetail',
            resolve: {
                customer: function (customerService, $transition$) {
                    return customerService.get({customerId: $transition$.params().customerId})
                }
            }
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>About!</h3>'
        };




        $stateProvider.state(customerListState);
        $stateProvider.state(customerDetailState);
        $stateProvider.state(aboutState);
    })
})();