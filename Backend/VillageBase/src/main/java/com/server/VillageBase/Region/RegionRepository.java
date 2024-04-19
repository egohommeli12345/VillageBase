package com.server.VillageBase.Region;

import com.server.VillageBase.Region.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)
public interface RegionRepository extends JpaRepository<Region, String>{

    @Query("SELECT MAX(alue_id) FROM Region") int findRegionWithMaxId();

    @Modifying
    @Query("DELETE FROM Region WHERE alue_id = ?1") void deleteByRegionId(int id);
}
