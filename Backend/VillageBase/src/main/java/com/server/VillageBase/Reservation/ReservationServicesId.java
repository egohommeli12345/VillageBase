package com.server.VillageBase.Reservation;

import jakarta.persistence.Embeddable;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ReservationServicesId implements Serializable {
    private int varaus_id;
    private int palvelu_id;

    public ReservationServicesId() {
    }

    public ReservationServicesId(int varaus_id, int palvelu_id) {
        this.varaus_id = varaus_id;
        this.palvelu_id = palvelu_id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReservationServicesId that = (ReservationServicesId) o;
        return varaus_id == that.varaus_id &&
                palvelu_id == that.palvelu_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(varaus_id, palvelu_id);
    }
}
