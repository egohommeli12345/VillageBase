package com.server.VillageBase.Region;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class RegionController {

    @Autowired
    private RegionService regionService;

    @GetMapping("/api/regions/all")
    public List<Region> getAllRegions() {
        return regionService.getAllRegions();
    }
}
