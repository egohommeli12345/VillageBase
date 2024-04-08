package com.server.VillageBase.Region;

import com.server.VillageBase.Service.ServiceObject;
import org.springframework.beans.factory.annotation.Autowired;
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
public class RegionController {

    // @Autowired will allow the use of RegionService without the need to instantiate it
    @Autowired
    private RegionService regionService;

    // This function servers as a GET request handler for the client
    // @GetMapping is used to map the URL to the function
    @GetMapping("/api/regions/all")
    public List<Region> getAllRegions() {
        return regionService.getAllRegions();
    }

    @GetMapping("/api/regions/maxid")
    public int getMaxId() { return regionService.getMaxId(); }

    @PostMapping("/api/regions/add")
    public String addService(
            @RequestBody Region regionObject) {
        regionService.addRegion(regionObject);
        return "Service added";
    }

    @GetMapping("/api/regions/delete")
    public String deleteService(@RequestParam int id) {
        regionService.deleteRegion(id);
        return "Service deleted";
    }
}
