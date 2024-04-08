package com.server.VillageBase.Reservation;

import com.server.VillageBase.Cottage.Cottage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
    @Modifying
    @Query("DELETE FROM Reservation WHERE asiakas_id = ?1") void deleteById(int id);

    @Query("SELECT varaus_id FROM Reservation WHERE asiakas_id = ?1") List<Integer> findReservationIdsByCustomerId(int id);
}
