package com.server.VillageBase.Reservation;

import com.server.VillageBase.Cottage.Cottage;
import com.server.VillageBase.Cottage.CottageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
    public List<Cottage> getAvailableCottages(
            @RequestBody Map<String, String> dates) {
            System.out.println(dates);
        return reservationService.getAvailableCottages(dates.get("startDate"), dates.get("endDate"));
    }

    @GetMapping("/api/reservations/delete")
    public String deleteCottage(@RequestParam int id) {
        reservationService.deleteReservation(id);
        return "Reservation deleted";
    }

    @GetMapping("/api/reservations/maxid")
    public int getMaxId() {
        return reservationService.getMaxId();
    }

    @PostMapping("/api/reservations/reservationserviceadd")
    public String addReservationService(@RequestBody List<ReservationServices> reservationServices) {
        reservationService.addReservationServices(reservationServices);
        return "Added";
    }

    @PostMapping("/api/reservations/add")
    public String addReservation(@RequestBody Reservation reservation) {
        reservationService.addReservation(reservation);
        return "Reservation added";
    }

    @GetMapping("/api/reservations/getreservationbyid")
    public Reservation getReservationById(@RequestParam int id) {
        return reservationService.getReservationByReservationId(id);
    }

    @GetMapping("/api/reservations/getTotalServicePriceByReservationId")
    public double getTotalServicePriceByReservationId(@RequestParam int id) {
        return reservationService.getTotalServicePriceByReservationId(id);
    }

    @GetMapping("/api/reservations/getreservationservicelistbyreservationid")
    public List<ReservationServices> getReservationServiceListByReservationId(@RequestParam int id) {
        return reservationService.getReservationServiceListByReservationId(id);
    }
}
