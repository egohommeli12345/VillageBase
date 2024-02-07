package com.server.VillageBase.Cottage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// @Service maps the class as a service layer
// It is used to handle the business logic of the application
@Service
public class CottageService {

        //will allow the use of CottageRepository without the need to instantiate it
        @Autowired
        private CottageRepository cottageRepository;

        // This returns all the cottages from the database (through the repository layer)
        public List<Cottage> getAllCottages() {
            return cottageRepository.findAll();
        }
}
