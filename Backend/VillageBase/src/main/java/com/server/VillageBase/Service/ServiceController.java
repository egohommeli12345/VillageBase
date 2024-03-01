package com.server.VillageBase.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Controller layer is created for each entity
// It servers the purpose of handling the requests from the client (=frontend)

// @RestController allows the class to serve as
// a RESTful controller: it is capable of handling the requests of the client
// @CrossOrigin is used to allow cross-origin requests from the specified client
// in this case, the client is running on http://localhost:5173 (=frontend)
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ServiceController {
    // @Autowired will allow the use of CottageService without the need to instantiate it
    @Autowired
    private ServiceService serviceService;

    // This function servers as a GET request handler for the client
    // @GetMapping is used to map the URL to the function
    @GetMapping("/api/services/all")
    public List<ServiceObject> getAllServices() { return serviceService.getAllServices(); }
}
