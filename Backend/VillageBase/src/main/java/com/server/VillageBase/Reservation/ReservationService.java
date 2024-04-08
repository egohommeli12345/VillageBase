package com.server.VillageBase.Reservation;

import com.server.VillageBase.Cottage.Cottage;
import com.server.VillageBase.Cottage.CottageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;


// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class ReservationService {

    //will allow the use of ReservationRepository without the need to instantiate it
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private CottageRepository cottageRepository;

    // This returns all the Reservations from the database (through the repository layer)
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public List<Cottage> getAvailableCottages(String startDate, String endDate) {
        return cottageRepository.findAvailableCottages(startDate, endDate);
    }
}