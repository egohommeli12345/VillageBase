package com.server.VillageBase.Service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)

public interface ServiceRepository extends JpaRepository<ServiceObject, Integer> {

    // This function is used to find the service with the maximum id
    @Query("SELECT MAX(palvelu_id) FROM ServiceObject")
    int findServiceWithMaxId();

    @Modifying
    @Query("DELETE FROM ServiceObject WHERE alue_id = ?1") void deleteByRegionId(int id);
}
