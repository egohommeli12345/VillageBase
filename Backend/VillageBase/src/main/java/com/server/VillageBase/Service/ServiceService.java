package com.server.VillageBase.Service;

import com.server.VillageBase.Billing.BillingRepository;
import com.server.VillageBase.Reservation.ReservationRepository;
import com.server.VillageBase.Reservation.ReservationServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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

    public List<ServiceObject> getServiceByCottageId(int id) {
        return serviceRepository.getServiceObjectByCottageId(id);
    }

    @Transactional
    public void deleteService(int id) {
        billingRepository.deleteByServiceId(id);
        reservationServicesRepository.deleteByServiceId(id);
        serviceRepository.deleteByServiceId(id);
    }

    public List<ServiceObject> getServicesByReservationId(int id) {
        List<ServiceObject> serviceObjectList = new ArrayList<ServiceObject>();
        List<Integer> serviceIds =
                reservationServicesRepository.getReservationServiceIdListByReservationId(id);
        for(Integer serviceId : serviceIds) {
            serviceObjectList.add(serviceRepository.getServicesByReservationId(serviceId));
        }
        for(ServiceObject service : serviceObjectList) {
            System.out.println(service);
        }
        return serviceObjectList;
    }
}