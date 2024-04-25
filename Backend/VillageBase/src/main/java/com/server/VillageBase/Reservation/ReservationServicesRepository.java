package com.server.VillageBase.Reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ReservationServicesRepository extends JpaRepository<ReservationServices, ReservationServicesId> {
    @Modifying
    @Query("DELETE FROM ReservationServices WHERE id.varaus_id = ?1") void deleteById(int id);

    @Modifying
    @Query("DELETE FROM ReservationServices WHERE id.varaus_id IN" +
            "(SELECT varaus_id FROM Reservation WHERE mokki_mokki_id IN" +
            "(SELECT mokki_id FROM Cottage WHERE alue_id = ?1))") void deleteByRegionId(int id);

    @Modifying
    @Query("DELETE FROM ReservationServices WHERE id.varaus_id IN" +
            "(SELECT varaus_id FROM Reservation WHERE mokki_mokki_id = ?1)") void deleteByCottageId(int id);

    @Modifying
    @Query("DELETE FROM ReservationServices WHERE id.palvelu_id = ?1") void deleteByServiceId(int id);

    @Modifying
    @Query("DELETE FROM ReservationServices WHERE id.varaus_id = ?1") void deleteByReservationId(int id);

}
