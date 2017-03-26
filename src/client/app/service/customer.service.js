/**
 * Created by ergou on 3/26/2017.
 */
(function () {
    "use strict";

    var module = angular.module("service.module");

    module.factory("customerService", customerService);
    // customerService.$inject = ["$http"];
    //
    // function customerService ($http) {
    //     var api = {
    //         getCustomers: getCustomers
    //     };
    //     return api;
    //
    //     function getCustomers() {
    //         return $http.get('customer.json');
    //     }
    // }

    customerService.$inject = ["$resource"];
    function customerService($resource) {
        // return $resource('customer.json');
        return $resource('/api/customers/:customerId');
    }
})();