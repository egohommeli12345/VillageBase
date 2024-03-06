package com.server.VillageBase.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class  ServiceService {

    //will allow the use of CottageRepository without the need to instantiate it
    @Autowired
    private ServiceRepository serviceRepository;

    public List<ServiceObject> getAllServices() { return serviceRepository.findAll(); }

    public int getMaxId() { return serviceRepository.findServiceWithMaxId(); }
}