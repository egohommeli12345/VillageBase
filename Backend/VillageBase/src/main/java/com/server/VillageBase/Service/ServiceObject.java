package com.server.VillageBase.Service;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// @Entity is used to map this class as a data entity
// It matches the datamodel in the database
// @Table is used to specify the database table from which the data is read
@Entity
@Table(name = "palvelu")
public class ServiceObject<R, S> {
    // @Id specifies the primary key in the table
    // Variable names need be same as in the table
    @Id
    private int palvelu_id;
    private int alue_id;
    private String nimi;
    private int tyyppi;
    private String kuvaus;
    private int hinta;
    private int alv;
    public ServiceObject() {
    }

    public ServiceObject(int palvelu_id, int alue_id, String nimi, int tyyppi, String kuvaus, int hinta, int alv) {
        this.palvelu_id = palvelu_id;
        this.alue_id = alue_id;
        this.nimi = nimi;
        this.tyyppi = tyyppi;
        this.kuvaus = kuvaus;
        this.hinta = hinta;
        this.alv = alv;
    }

    public int getPalvelu_id() {
        return palvelu_id;
    }

    public void setPalvelu_id(int palvelu_id) {
        this.palvelu_id = palvelu_id;
    }

    public int getAlue_id() {
        return alue_id;
    }

    public void setAlue_id(int alue_id) {
        this.alue_id = alue_id;
    }

    public String getNimi() {
        return nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public int getTyyppi() {
        return tyyppi;
    }

    public void setTyyppi(int tyyppi) {
        this.tyyppi = tyyppi;
    }

    public String getKuvaus() {
        return kuvaus;
    }

    public void setKuvaus(String kuvaus) {
        this.kuvaus = kuvaus;
    }

    public int getHinta() {
        return hinta;
    }

    public void setHinta(int hinta) {
        this.hinta = hinta;
    }

    public int getAlv() {
        return alv;
    }

    public void setAlv(int alv) {
        this.alv = alv;
    }
}
