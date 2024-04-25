package com.server.VillageBase.Reservation;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "varauksen_palvelut")
public class ReservationServices {
    @EmbeddedId
    private ReservationServicesId id;
    private int lkm;

    public ReservationServicesId getId() {
        return id;
    }

    public void setId(ReservationServicesId id) {
        this.id = id;
    }

    public int getLkm() {
        return lkm;
    }

    public void setLkm(int lkm) {
        this.lkm = lkm;
    }
}
