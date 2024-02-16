package com.server.VillageBase.Reservation;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// @Entity is used to map this class as a data entity
// It matches the datamodel in the database
// @Table is used to specify the database table from which the data is read

@Entity
@Table (name = "varaus")
public class Reservation<R, S> {
    // @Id specifies the primary key in the table
    // Variable names need be same as in the table

    @Id
    private int varaus_id;
    private int asiakas_id;
    private int mokki_mokki_id;
    private String varattu_pvm;
    private String vahvistus_pvm;
    private String varattu_alkupvm;
    private String varattu_loppupvm;

    public Reservation(){
    }

    public Reservation(int varaus_id, int asiakas_id, int mokki_mokki_id, String varattu_pvm, String vahvistus_pvm, String varattu_alkupvm, String varattu_loppupvm) {
        this.varaus_id = varaus_id;
        this.asiakas_id = asiakas_id;
        this.mokki_mokki_id = mokki_mokki_id;
        this.varattu_pvm = varattu_pvm;
        this.vahvistus_pvm = vahvistus_pvm;
        this.varattu_alkupvm = varattu_alkupvm;
        this.varattu_loppupvm = varattu_loppupvm;
    }

    public int getAsiakas_id() {
        return asiakas_id;
    }

    public void setAsiakas_id(int asiakas_id) {
        this.asiakas_id = asiakas_id;
    }

    public int getMokki_mokki_id() {
        return mokki_mokki_id;
    }

    public void setMokki_mokki_id(int mokki_mokki_id) {
        this.mokki_mokki_id = mokki_mokki_id;
    }

    public int getVaraus_id() {
        return varaus_id;
    }

    public void setVaraus_id(int varaus_id) {
        this.varaus_id = varaus_id;
    }

    public String getVarattu_pvm() {
        return varattu_pvm;
    }

    public void setVarattu_pvm(String varattu_pvm) {
        this.varattu_pvm = varattu_pvm;
    }

    public String getVahvistus_pvm() {
        return vahvistus_pvm;
    }

    public void setVahvistus_pvm(String vahvistus_pvm) {
        this.vahvistus_pvm = vahvistus_pvm;
    }

    public String getVarattu_alkupvm() {
        return varattu_alkupvm;
    }

    public void setVarattu_alkupvm(String varattu_alkupvm) {
        this.varattu_alkupvm = varattu_alkupvm;
    }

    public String getVarattu_loppupvm() {
        return varattu_loppupvm;
    }

    public void setVarattu_loppupvm(String varattu_loppupvm) {
        this.varattu_loppupvm = varattu_loppupvm;
    }
}
