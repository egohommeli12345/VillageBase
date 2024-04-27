package com.server.VillageBase.Billing;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)
public interface BillingRepository extends JpaRepository<Billing, Integer>{
    @Modifying
    @Query("DELETE FROM Billing WHERE lasku_id = ?1") void deleteByBillingId(int id);

    @Modifying
    @Query("DELETE FROM Billing WHERE varaus_id = ?1") void deleteByReservationId(int id);

    @Modifying
    @Query("DELETE FROM Billing WHERE varaus_id IN" +
            "(SELECT varaus_id FROM Reservation WHERE mokki_mokki_id IN" +
            "(SELECT mokki_id FROM Cottage WHERE alue_id = ?1))") void deleteByRegionId(int id);

    @Modifying
    @Query("DELETE FROM Billing WHERE varaus_id IN" +
            "(SELECT varaus_id FROM Reservation WHERE mokki_mokki_id = ?1)") void deleteByCottageId(int id);

    @Modifying
    @Query("DELETE FROM Billing WHERE varaus_id IN" +
            "(SELECT id.varaus_id FROM ReservationServices WHERE id" +
            ".palvelu_id = ?1)") void deleteByServiceId(int id);

    @Query("SELECT MAX(lasku_id) FROM Billing") int findBillWithMaxId();

    @Transactional
    @Modifying
    @Query(value = "UPDATE lasku SET maksettu = 1 WHERE lasku_id = ?1",
            nativeQuery = true) void markAsPaidByBillingId(int id);
}
