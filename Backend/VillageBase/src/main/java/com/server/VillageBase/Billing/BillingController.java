package com.server.VillageBase.Billing;

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
public class BillingController {

    // @Autowired will allow the use of BillingService without the need to instantiate it
    @Autowired
    private BillingService billingService;

    // This function servers as a GET request handler for the client
    // @GetMapping is used to map the URL to the function
    @GetMapping("/api/billings/all")
    public List<Billing> getAllBillings() { return billingService.getAllBillings(); }

    @GetMapping("/api/billings/delete")
    public String deleteBilling(@RequestParam int id) {
        billingService.deleteBilling(id);
        return "Bill deleted";
    }

    @GetMapping("/api/billings/maxid")
    public int getMaxId() { return billingService.getMaxId(); }

    @PostMapping("/api/billings/add")
    public String addBilling(@RequestBody Billing billing) {
        billingService.addBilling(billing);
        return "Bill added";
    }

    @GetMapping("/api/billings/markaspaid")
    public String markAsPaid(@RequestParam int id) {
        billingService.markAsPaid(id);
        return "Marked as paid";
    }
}
