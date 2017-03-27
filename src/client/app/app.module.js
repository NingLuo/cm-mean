/**
 * Created by ergou on 3/26/2017.
 */
(function () {
    "use strict";

    var module = angular.module("customerManagement", ["ui.router", "ngResource", "customer.module", "service.module"]);

    module.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        var homeState = {
            name: 'home',
            url: '/',
            template: '<h1>Welcom to Customer Management</h1>'
        };

        var customerListState = {
            name: 'customerList',
            url: '/customerList',
            component: 'customerList',
            resolve: {
                customerList: function (customerService) {
                    return customerService.query().$promise;
                }
            }
        };

        var customerDetailState = {
            name: 'customerDetail',
            url: '/customerDetail/{customerId}',
            component: 'customerDetail',
            resolve: {
                customer: function (customerService, $transition$) {
                    return customerService.get({customerId: $transition$.params().customerId}).$promise;
                }
            }
        };

        var customerEditState = {
            name: 'customerEdit',
            url: '/customerEdit/{customerId}',
            component: 'customerEdit',
            resolve: {
                customer: function (customerService, $transition$) {
                    return customerService.get({customerId: $transition$.params().customerId}).$promise;
                }
            }
        };

        $stateProvider.state(homeState);
        $stateProvider.state(customerListState);
        $stateProvider.state(customerDetailState);
        $stateProvider.state(customerEditState);
    })
})();