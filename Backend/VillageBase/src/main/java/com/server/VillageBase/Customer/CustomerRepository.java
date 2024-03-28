package com.server.VillageBase.Customer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)
public interface CustomerRepository extends JpaRepository<Customer, Integer>{
    @Query("SELECT MAX(asiakas_id) FROM Customer") int findCustomerWithMaxId();
}
