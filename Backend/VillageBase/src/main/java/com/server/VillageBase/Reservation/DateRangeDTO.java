package com.server.VillageBase.Reservation;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class DateRangeDTO {
    private LocalDate varattu_alkupvm;
    private LocalDate varattu_loppupvm;

    public DateRangeDTO() {
    }

    public DateRangeDTO(LocalDate varattu_alkupvm, LocalDate varattu_loppupvm) {
        this.varattu_alkupvm = varattu_alkupvm;
        this.varattu_loppupvm = varattu_loppupvm;
    }

    public void setVarattu_alkupvm(LocalDate varattu_alkupvm) {
        this.varattu_alkupvm = varattu_alkupvm;
    }

    public void setVarattu_loppupvm(LocalDate varattu_loppupvm) {
        this.varattu_loppupvm = varattu_loppupvm;
    }
}
