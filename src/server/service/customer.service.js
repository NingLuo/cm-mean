/**
 * Created by ergou on 3/26/2017.
 */
"use strict";

module.exports = function (app) {
    app.get('/api/customers', getCustomers);
    app.get('/api/customers/:customerId', getCustomerById);
    app.post('/api/customers', postCustomer);
    app.delete('/api/customers/:customerId', deleteCustomer);

    ///////////////////////////////////////////////

    /*
     Read customer data from JSON file
     */
    var fs = require('fs');
    var contents = fs.readFileSync("src/server/data/customer.json");
    var customers = JSON.parse(contents);

    /*
     GetCustomers
     */
    function getCustomers (req, res) {
        res.json(customers);
    }

    /*
     Get Customer By Id
     */
    function getCustomerById (req, res) {
        var customerId = req.params.customerId;
        for(var i = 0; i < customers.length; i++) {
            if (customers[i].customerId == customerId) {
                res.json(customers[i]);
            }
        }
    }

    /*
     Create new or update existing customer
     */
    function postCustomer(req, res) {
        var customer = req.body;

        if (!customer.customerId) {
            //new customer Id
            customer.customerId = customers[customers.length - 1].customerId + 1;
            customers.push(customer);
        }
        else {
            //update product
            for(var i = 0; i < customers.length; i++) {
                if (customers[i].customerId == customer.customerId) {
                    customers[i] = customer;
                    break;
                }
            }
        }

        res.status(200).json(customer);
    }

    /*
     Delete customer by customerId
     */
    function deleteCustomer(req, res) {
        var customerId = req.params.customerId;
        for(var i = 0; i < customers.length; i++) {
            if (customers[i].customerId == customerId) {
                var customer = customers[i];
                customers.splice(i, 1);

                res.status(200).json(customer);
            }
        }

    }
};