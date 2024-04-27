package com.server.VillageBase.City;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/api/post/getpostbyzip")
    public City getPostByZip(@RequestParam String zip) {
        return cityService.getPostByZip(zip);
    }
}
