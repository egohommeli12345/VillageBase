package com.server.VillageBase.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)
public interface CustomerRepository extends JpaRepository<Customer, Integer>{
    @Query("SELECT MAX(asiakas_id) FROM Customer") int findCustomerWithMaxId();

    @Modifying
    @Query("DELETE FROM Customer WHERE asiakas_id = ?1") void deleteById(int id);

    @Query(value = "SELECT * FROM asiakas WHERE asiakas_id = ?1",
            nativeQuery = true) Customer getCustomerById(int id);
}
