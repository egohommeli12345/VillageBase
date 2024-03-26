package com.server.VillageBase.Region;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class RegionService {

    // @Autowired will allow the use of RegionRepository without the need to instantiate it
    @Autowired
    private RegionRepository regionRepository;

    // This returns all the regions from the database (through the repository layer)
    public List<Region> getAllRegions() {
        return regionRepository.findAll();
    }

    public int getMaxId() { return regionRepository.findRegionWithMaxId(); }

    public Region addRegion(Region region) {
        return regionRepository.save(region);
    }
}
