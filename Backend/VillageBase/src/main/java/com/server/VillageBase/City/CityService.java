package com.server.VillageBase.City;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityService {
    @Autowired
    private CityRepository cityRepository;

    public void addPost(City city) {
        cityRepository.addCityIfNotExists(city.getPostinro(), city.getToimipaikka());
    }
}
