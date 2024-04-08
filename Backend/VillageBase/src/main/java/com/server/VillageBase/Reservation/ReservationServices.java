package com.server.VillageBase.Reservation;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "varauksen_palvelut")
public class ReservationServices {
    @EmbeddedId
    private ReservationServicesId id;
    private int lkm;
}
