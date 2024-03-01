package com.server.VillageBase.Reservation;

import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)

public interface ReservationRepository extends JpaRepository<Reservation, String> {
}
