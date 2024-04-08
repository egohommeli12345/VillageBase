package com.server.VillageBase.Billing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)
public interface BillingRepository extends JpaRepository<Billing, Integer>{
    @Modifying
    @Query("DELETE FROM Billing WHERE varaus_id = ?1") void deleteById(int id);
}
