/**
 * Created by ergou on 3/26/2017.
 */
(function () {
    "use strict";

    var module = angular.module("service.module");

    module.factory("customerService", customerService);

    customerService.$inject = ["$resource"];
    ///////////////////////////////////////////

    function customerService($resource) {
        return $resource('/api/customers/:customerId');
    }
})();