package com.server.VillageBase.Reservation;

import com.server.VillageBase.Cottage.Cottage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class ReservationController {

    // @Autowired will allow the use of RegionService without the need to instantiate it
    @Autowired
    private ReservationService reservationService;

    // This function servers as a GET request handler for the client
    // @GetMapping is used to map the URL to the function

    @GetMapping("/api/reservations/all")
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @PostMapping("/api/reservations/available-cottages")
    public ResponseEntity<List<Cottage>> getAvailableCottages(@RequestBody DateRangeDTO dateRange) {
        try {
            List<Cottage> availableCottages = reservationService.getAvailableCottages(dateRange);
            return new ResponseEntity<>(availableCottages, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
