package com.server.VillageBase.City;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:5173"})
@RestController
public class CityController {
    @Autowired
    private CityService cityService;


    @PostMapping("/api/post/add")
    public String addPost(@RequestBody City city) {
        cityService.addPost(city);
        return "Added";
    }
}
