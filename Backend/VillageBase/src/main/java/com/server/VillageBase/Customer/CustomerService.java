package com.server.VillageBase.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class CustomerService {

    //will allow the use of CustomerRepository without the need to instantiate it
    @Autowired
    private CustomerRepository customerRepository;

    // This returns all the customers from the database (through the repository layer)
    public List<Customer> getAllCustomers() { return customerRepository.findAll(); }
}
