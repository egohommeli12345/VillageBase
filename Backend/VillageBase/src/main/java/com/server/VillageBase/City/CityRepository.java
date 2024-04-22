package com.server.VillageBase.City;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CityRepository extends JpaRepository<City, String> {

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO posti (postinro, toimipaikka) " +
            "SELECT ?1, ?2 " +
            "WHERE NOT EXISTS (SELECT * FROM posti WHERE postinro = ?1)",
            nativeQuery = true)
    void addCityIfNotExists(String postinro, String toimipaikka);
}

