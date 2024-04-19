package com.server.VillageBase.Region;

import com.server.VillageBase.Billing.BillingRepository;
import com.server.VillageBase.Cottage.CottageRepository;
import com.server.VillageBase.Reservation.ReservationRepository;
import com.server.VillageBase.Reservation.ReservationServicesRepository;
import com.server.VillageBase.Service.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class RegionService {

    // @Autowired will allow the use of RegionRepository without the need to instantiate it
    @Autowired
    private RegionRepository regionRepository;
    @Autowired
    private CottageRepository cottageRepository;
    @Autowired
    private ServiceRepository serviceRepository;
    @Autowired
    private ReservationServicesRepository reservationServicesRepository;
    @Autowired
    private BillingRepository billingRepository;
    @Autowired
    private ReservationRepository reservationRepository;

    // This returns all the regions from the database (through the repository layer)
    public List<Region> getAllRegions() {
        return regionRepository.findAll();
    }

    public int getMaxId() { return regionRepository.findRegionWithMaxId(); }

    public Region addRegion(Region region) {
        return regionRepository.save(region);
    }

    @Transactional
    public void deleteRegion(int id) {
        // NOT READY
        // Deleting cottage will need to delete reservations and related
        // information from the database
        reservationServicesRepository.deleteByRegionId(id);
        billingRepository.deleteByRegionId(id);
        reservationRepository.deleteByRegionId(id);
        cottageRepository.deleteByRegionId(id);
        serviceRepository.deleteByRegionId(id);
        regionRepository.deleteByRegionId(id);
    }
}
