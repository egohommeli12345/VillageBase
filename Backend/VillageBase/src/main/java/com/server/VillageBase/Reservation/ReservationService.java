package com.server.VillageBase.Reservation;

import com.server.VillageBase.Billing.BillingRepository;
import com.server.VillageBase.Cottage.Cottage;
import com.server.VillageBase.Cottage.CottageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;


// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class ReservationService {

    //will allow the use of ReservationRepository without the need to instantiate it
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private ReservationServicesRepository reservationServicesRepository;
    @Autowired
    private CottageRepository cottageRepository;
    @Autowired
    private BillingRepository billingRepository;

    // This returns all the Reservations from the database (through the repository layer)
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public List<Cottage> getAvailableCottages(String startDate, String endDate) {
        return cottageRepository.findAvailableCottages(startDate, endDate);
    }

    @Transactional
    public void deleteReservation(int id) {
        billingRepository.deleteByReservationId(id);
        reservationServicesRepository.deleteByReservationId(id);
        reservationRepository.deleteByReservationId(id);
    }

    public int getMaxId() {
        return reservationRepository.findReservationWithMaxId();
    }

    public void addReservationServices(List<ReservationServices> reservationServices) {
        reservationServicesRepository.saveAll(reservationServices);
    }

    public void addReservation(Reservation reservation) {
        reservationRepository.save(reservation);
    }

    public Reservation getReservationByReservationId(int id) {
        return reservationRepository.getReservationById(id);
    }

    public double getTotalServicePriceByReservationId(int id) {
        return reservationServicesRepository.getTotalServicePriceByReservationId(id);
    }

    public List<ReservationServices> getReservationServiceListByReservationId(int id) {
        return reservationServicesRepository.getReservationServiceListByReservationId(id);
    }
}