package com.server.VillageBase.Service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
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

    @Modifying
    @Query("DELETE FROM ServiceObject WHERE palvelu_id = ?1") void deleteByServiceId(int id);

    @Query(value = "SELECT * FROM palvelu WHERE alue_id IN (" +
            "SELECT alue_id FROM mokki WHERE mokki_id = ?1)",
            nativeQuery = true)
    List<ServiceObject> getServiceObjectByCottageId(int id);
}
