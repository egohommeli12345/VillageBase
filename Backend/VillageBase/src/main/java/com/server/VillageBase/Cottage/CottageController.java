package com.server.VillageBase.Cottage;

import com.server.VillageBase.Region.Region;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Controller layer is created for each entity
// It servers the purpose of handling the requests from the client (=frontend)

// @RestController allows the class to serve as
// a RESTful controller: it is capable of handling the requests of the client
// @CrossOrigin is used to allow cross-origin requests from the specified client
// in this case, the client is running on http://localhost:5173 (=frontend)
@CrossOrigin(origins = {"http://localhost:5173"})
@RestController
public class CottageController {

    // @Autowired will allow the use of CottageService without the need to instantiate it
    @Autowired
    private CottageService cottageService;

    // This function servers as a GET request handler for the client
    // @GetMapping is used to map the URL to the function
    @GetMapping("/api/cottages/all")
    public List<Cottage> getAllCottages() {
        return cottageService.getAllCottages();
    }

    @GetMapping("/api/cottages/maxid")
    public int getMaxId() { return cottageService.getMaxId(); }

    @PostMapping("/api/cottages/add")
    public String addCottage(
            @RequestBody Cottage cottageObject) {
        System.out.println(cottageObject);
        cottageService.addCottage(cottageObject);
        return "Service added";
    }

    @GetMapping("/api/cottages/delete")
    public String deleteCottage(@RequestParam int id) {
        cottageService.deleteCottage(id);
        return "Cottage deleted";
    }

    @GetMapping("/api/cottages/getcottagebyreservationid")
    public Cottage getCottageByReservationId(@RequestParam int id) {
        return cottageService.getCottageByReservationId(id);
    }
}
