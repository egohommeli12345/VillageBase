package com.server.VillageBase.Customer;

import com.server.VillageBase.Billing.Billing;
import com.server.VillageBase.Billing.BillingRepository;
import com.server.VillageBase.Reservation.ReservationRepository;
import com.server.VillageBase.Reservation.ReservationServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class CustomerService {

    //will allow the use of CustomerRepository without the need to instantiate it
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private ReservationServicesRepository reservationServicesRepository;
    @Autowired
    private BillingRepository billingRepository;

    // This returns all the customers from the database (through the repository layer)
    public List<Customer> getAllCustomers() { return customerRepository.findAll(); }

    public int getMaxId() { return customerRepository.findCustomerWithMaxId(); }

    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Transactional
    public void deleteCustomerInfo(int asiakas_id) {
        List<Integer> reservationIds =
                reservationRepository.findReservationIdsByCustomerId(asiakas_id);
        for(int varaus_id: reservationIds) {
            billingRepository.deleteById(varaus_id);
            reservationServicesRepository.deleteById(varaus_id);
        }
        reservationRepository.deleteById(asiakas_id);
        customerRepository.deleteById(asiakas_id);
    }
}
