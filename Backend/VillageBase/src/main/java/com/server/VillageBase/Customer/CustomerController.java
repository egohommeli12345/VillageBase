package com.server.VillageBase.Customer;

import com.server.VillageBase.Cottage.Cottage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Controller layer is created for each entity
// It servers the purpose of handling the requests from the client (=frontend)

// @RestController allows the class to serve as
// a RESTful controller: it is capable of handling the requests of the client
// @CrossOrigin is used to allow cross-origin requests from the specified client
// in this case, the client is running on http://localhost:5173 (=frontend)
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CustomerController {

    // @Autowired will allow the use of CustomerService without the need to instantiate it
    @Autowired
    private CustomerService customerService;

    // This function servers as a GET request handler for the client
    // @GetMapping is used to map the URL to the function
    @GetMapping("/api/customers/all")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/api/customers/maxid")
    public int getMaxId() { return customerService.getMaxId(); }

    @PostMapping("/api/customers/add")
    public String addCustomer(
            @RequestBody Customer customerObject) {
        customerService.addCustomer(customerObject);
        return "Customer added";
    }

    @GetMapping("/api/customers/delete")
    public String deleteCustomer(@RequestParam int id) {
        customerService.deleteCustomerInfo(id);
        return "Customer deleted";
    }
}

