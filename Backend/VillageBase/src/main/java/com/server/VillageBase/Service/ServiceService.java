package com.server.VillageBase.Service;

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
public class  ServiceService {

    //will allow the use of ServiceRepository without the need to instantiate it
    @Autowired
    private ServiceRepository serviceRepository;
    @Autowired
    private ReservationServicesRepository reservationServicesRepository;
    @Autowired
    private BillingRepository billingRepository;
    @Autowired
    private ReservationRepository reservationRepository;

    public List<ServiceObject> getAllServices() { return serviceRepository.findAll(); }

    public int getMaxId() { return serviceRepository.findServiceWithMaxId(); }

    public ServiceObject addService(ServiceObject serviceObject) {
        return serviceRepository.save(serviceObject);
    }

    @Transactional
    public void deleteService(int id) {
        billingRepository.deleteByServiceId(id);
        reservationServicesRepository.deleteByServiceId(id);
        serviceRepository.deleteByServiceId(id);
    }
}