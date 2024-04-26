package com.server.VillageBase.Billing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class BillingService {

    //will allow the use of CottageRepository without the need to instantiate it
    @Autowired
    private BillingRepository billingRepository;

    // This returns all the cottages from the database (through the repository layer)
    public List<Billing> getAllBillings() {
        return billingRepository.findAll();
    }

    @Transactional
    public void deleteBilling(int id) {
        billingRepository.deleteByBillingId(id);
    }

    public int getMaxId() {
        return billingRepository.findBillWithMaxId();
    }

    public void addBilling(Billing billing) {
        billingRepository.save(billing);
    }
}
