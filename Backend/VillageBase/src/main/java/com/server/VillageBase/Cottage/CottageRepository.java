package com.server.VillageBase.Cottage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

// JpaRepository is an interface that allows the use of CRUD operations
// It is used to handle the database operations of the application
// Repository layer is created for each entity

// EntityRepository needs to extend JpaRepository (it contains the CRUD logic)
public interface CottageRepository extends JpaRepository<Cottage, Integer> {

    @Query("SELECT MAX(mokki_id) FROM Cottage") int findCottageWithMaxId();

    @Query(value = "SELECT * FROM mokki " +
            "LEFT JOIN varaus ON mokki.mokki_id = varaus.mokki_mokki_id " +
            "WHERE (varaus.varattu_alkupvm IS NULL OR DATE(varaus.varattu_alkupvm) NOT BETWEEN :startDate AND " +
            ":endDate) " +
            "AND (varaus.varattu_loppupvm IS NULL OR DATE(varaus" +
            ".varattu_loppupvm) NOT BETWEEN :startDate AND :endDate)", nativeQuery = true)
    List<Cottage> findAvailableCottages(
            @Param("startDate") String startDate,
            @Param("endDate") String endDate
    );

    @Modifying
    @Query("DELETE FROM Cottage WHERE alue_id = ?1") void deleteById(int id);
}

